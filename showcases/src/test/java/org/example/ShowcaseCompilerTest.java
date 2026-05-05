package org.example;

import org.eclipse.collections.api.factory.Sets;
import org.finos.legend.engine.language.pure.compiler.Compiler;
import org.finos.legend.engine.language.pure.compiler.toPureGraph.PureModel;
import org.finos.legend.engine.language.pure.compiler.toPureGraph.defect.Defect;
import org.finos.legend.engine.language.pure.grammar.from.PureGrammarParser;
import org.finos.legend.engine.language.pure.grammar.to.PureGrammarComposer;
import org.finos.legend.engine.language.pure.grammar.to.PureGrammarComposerContext;
import org.finos.legend.engine.protocol.pure.v1.ProtocolToClassifierPathLoader;
import org.finos.legend.engine.protocol.pure.v1.model.context.PureModelContextData;
import org.finos.legend.engine.protocol.pure.m3.PackageableElement;
import org.finos.legend.engine.protocol.pure.v1.model.test.assertion.status.AssertFail;
import org.finos.legend.engine.protocol.pure.v1.model.test.assertion.status.AssertionStatus;
import org.finos.legend.engine.protocol.pure.v1.model.test.assertion.status.EqualToJsonAssertFail;
import org.finos.legend.engine.protocol.pure.v1.model.test.result.TestError;
import org.finos.legend.engine.protocol.pure.v1.model.test.result.TestExecuted;
import org.finos.legend.engine.protocol.pure.v1.model.test.result.TestExecutionStatus;
import org.finos.legend.engine.protocol.pure.v1.model.test.result.TestResult;
import org.finos.legend.engine.shared.core.api.grammar.RenderStyle;
import org.finos.legend.engine.shared.core.deployment.DeploymentMode;
import org.finos.legend.engine.shared.core.identity.Identity;
import org.finos.legend.engine.testable.TestableRunner;
import org.finos.legend.engine.testable.extension.TestableRunnerExtensionLoader;
import org.finos.legend.engine.testable.model.RunTestsResult;
import org.finos.legend.engine.testable.model.RunTestsTestableInput;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameter;
import org.junit.runners.Parameterized.Parameters;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.PathMatcher;
import java.nio.file.Files;
import java.nio.file.FileSystems;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.junit.Assume.assumeFalse;

/**
 * Unit tests for each showcase that will run in parallel reading from file
 */
@RunWith(Parameterized.class)
public class ShowcaseCompilerTest
{
    private final Set<String> testableClassifiers = TestableRunnerExtensionLoader.getClassifierPathToTestableRunnerMap().keySet();
    private final Map<Class<? extends PackageableElement>, String> classifierPathMap = ProtocolToClassifierPathLoader.getProtocolClassToClassifierMap();
    private static final PathMatcher PURE_FILE_MATCHER = FileSystems.getDefault().getPathMatcher("glob:*.pure");
    @Parameter
    public Path showcasePath;

    @Parameters(name = "{0}")
    public static Iterable<?> showcaseFilePathsToTest()
    {
        final String[] SHOWCASE_LOCATIONS = System.getProperty("showcase.locations", "data").split(",");

        Set<Path> showcasePaths = Sets.mutable.empty();

        for (String location : SHOWCASE_LOCATIONS)
        {
            Path path = Paths.get(location);
            if (Files.isDirectory(path))
            {
                showcasePaths.addAll(getShowcaseFilePaths(path));
            }
            else if (PURE_FILE_MATCHER.matches(path.getFileName()))
            {
                showcasePaths.add(path);
            }
        }

        return showcasePaths;
    }

    private static Set<Path> getShowcaseFilePaths(Path showcaseDirectory)
    {
        try (Stream<Path> pathStream = Files.walk(showcaseDirectory))
        {
            return pathStream
                    .filter(p -> !Files.isDirectory(p))
                    .filter(p -> PURE_FILE_MATCHER.matches(p.getFileName()))
                    .collect(Collectors.toSet());
        }
        catch (IOException e)
        {
            throw new IllegalStateException(String.format("Invalid directory name %s.", showcaseDirectory), e);
        }
    }

    /**
     * Tests that a file can be processed by the new Legend version
     */
    @Test
    public void processShowcaseFile() throws IOException
    {
        // Stripping comments required as parser will remove them
        String pureGrammar = Files.readAllLines(showcasePath).stream()
                .filter(l -> !l.stripLeading().startsWith("//"))
                .collect(Collectors.joining("\n"));

        assumeFalse(pureGrammar.isEmpty());

        PureModelContextData pureModelContextData = PureGrammarParser.newInstance().parseModel(pureGrammar, "", 0, 0, true);
        PureGrammarComposer grammarComposer = PureGrammarComposer.newInstance(PureGrammarComposerContext.Builder.newInstance().withRenderStyle(RenderStyle.PRETTY).build());

        // Grammar composer adds a trailing newline
        String composedPureGrammar = grammarComposer.renderPureModelContextData(pureModelContextData);
        String expectedGrammar = pureGrammar + "\n";
        if (!expectedGrammar.equals(composedPureGrammar))
        {
            String diff = buildGrammarDiff(expectedGrammar, composedPureGrammar);
            assertEquals(
                    "Grammar round-trip mismatch for showcase file: " + showcasePath
                            + System.lineSeparator()
                            + "The composed grammar does not match the original .pure source after parse+compose."
                            + System.lineSeparator()
                            + "First differing lines:" + System.lineSeparator() + diff,
                    expectedGrammar,
                    composedPureGrammar);
        }

        // compile
        PureModel pureModel;
        try
        {
            pureModel = Compiler.compile(pureModelContextData, DeploymentMode.PROD, Identity.getAnonymousIdentity().getName());
        }
        catch (Exception e)
        {
            throw new AssertionError("Compilation failed for showcase file: " + showcasePath
                    + System.lineSeparator() + "Cause: " + e.getMessage(), e);
        }

        // ensure compiled PureModel has no defects
        assertNoDefects(pureModel);

        // run tests
        runAllTests(pureModel, pureModelContextData);
    }

    private void assertNoDefects(PureModel pureModel)
    {
        java.util.List<? extends Defect> defects = pureModel.getDefects();
        if (defects == null || defects.isEmpty())
        {
            return;
        }
        StringBuilder sb = new StringBuilder();
        sb.append("PureModel has ").append(defects.size())
                .append(" defect(s) for showcase file: ").append(showcasePath)
                .append(System.lineSeparator());
        int idx = 1;
        for (Defect defect : defects)
        {
            sb.append("  [").append(idx++).append("] ");
            try
            {
                sb.append(defect.buildPrettyDefectMessage());
            }
            catch (Exception ex)
            {
                sb.append(defect.defectSeverityLevel)
                        .append(" - ").append(defect.defectTypeId)
                        .append(" - ").append(defect.message)
                        .append(" @ ").append(defect.sourceInformation);
            }
            sb.append(System.lineSeparator());
        }
        fail(sb.toString());
    }


    // TODO Move to legend-engine
   public void runAllTests(PureModel puremodel, PureModelContextData data)
    {

        for (PackageableElement packageableElement: data.getElements())
        {
            Assert.assertTrue("Error getting classifier path for element '" + packageableElement.getPath() + "' in showcase file: " + showcasePath, classifierPathMap.containsKey(packageableElement.getClass()));
            String classifierPath = classifierPathMap.get(packageableElement.getClass());
            if(testableClassifiers.contains(classifierPath))
            {
                TestableRunner runner = new TestableRunner();
                RunTestsTestableInput runTestsTestableInput = new RunTestsTestableInput();
                runTestsTestableInput.testable = packageableElement.getPath();
                RunTestsResult testsResult = runner.doTests(Collections.singletonList(runTestsTestableInput), puremodel, data);
                for (TestResult result: testsResult.results)
                {
                    if (result instanceof TestError)
                    {
                        TestError testError = (TestError) result;
                        fail("Error running test '" + testError.atomicTestId + "' in suite " + testError.testSuiteId + " in testable " + testError.testable + " (showcase file: " + showcasePath + ") : " + testError.error);
                    }
                    if (result instanceof TestExecuted) {
                        TestExecuted testExecuted = (TestExecuted) result;
                        if (testExecuted.testExecutionStatus != TestExecutionStatus.PASS)
                        {
                            StringBuilder failMessage = new StringBuilder();
                            failMessage.append("Error running test '" + result.atomicTestId + "' in suite " + result.testSuiteId + " in testable " + result.testable + " (showcase file: " + showcasePath + ").");
                            for(AssertionStatus assertionStatus:  testExecuted.assertStatuses)
                            {
                                if(assertionStatus instanceof  AssertFail)
                                {
                                    failMessage.append(assertionStatus.id).append(": FAILURE\n").append(((AssertFail) assertionStatus).message);
                                    if (assertionStatus instanceof EqualToJsonAssertFail)
                                    {
                                        EqualToJsonAssertFail fail = (EqualToJsonAssertFail) assertionStatus;
                                        failMessage.append("\nexpected: ").append(fail.expected);
                                        failMessage.append("\nactual:   ").append(fail.actual);
                                    }
                                }
                            }
                            Assert.fail(failMessage.toString());
                        }
                    }
                }
            }
        }
    }

    /**
     * Builds a small, human-readable diff describing the first divergence between
     * the original and composed grammar so failures point straight at the offending line.
     */
    private static String buildGrammarDiff(String expected, String actual)
    {
        String[] expectedLines = expected.split("\n", -1);
        String[] actualLines = actual.split("\n", -1);
        int maxLines = Math.max(expectedLines.length, actualLines.length);

        for (int i = 0; i < maxLines; i++)
        {
            String e = i < expectedLines.length ? expectedLines[i] : "<EOF>";
            String a = i < actualLines.length ? actualLines[i] : "<EOF>";
            if (!e.equals(a))
            {
                StringBuilder sb = new StringBuilder();
                int contextStart = Math.max(0, i - 2);
                for (int c = contextStart; c < i; c++)
                {
                    sb.append("  ").append(c + 1).append(": ").append(expectedLines[c]).append(System.lineSeparator());
                }
                sb.append("- ").append(i + 1).append(": ").append(e).append(System.lineSeparator());
                sb.append("+ ").append(i + 1).append(": ").append(a).append(System.lineSeparator());
                sb.append("(total expected lines: ").append(expectedLines.length)
                        .append(", actual lines: ").append(actualLines.length).append(")");
                return sb.toString();
            }
        }
        return "<no line-level difference detected; check trailing whitespace or line endings>";
    }

}
