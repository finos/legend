package org.example;

import org.eclipse.collections.api.factory.Lists;
import org.eclipse.collections.api.factory.Sets;
import org.finos.legend.engine.language.pure.compiler.Compiler;
import org.finos.legend.engine.language.pure.grammar.from.PureGrammarParser;
import org.finos.legend.engine.language.pure.grammar.to.PureGrammarComposer;
import org.finos.legend.engine.language.pure.grammar.to.PureGrammarComposerContext;
import org.finos.legend.engine.protocol.pure.v1.model.context.PureModelContextData;
import org.finos.legend.engine.shared.core.deployment.DeploymentMode;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameter;
import org.junit.runners.Parameterized.Parameters;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.PathMatcher;
import java.nio.file.Paths;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.junit.Assume.assumeFalse;

/**
 * Unit tests for each showcase that will run in parallel reading from file
 */
@RunWith(Parameterized.class)
public class ShowcaseCompilerTest
{
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

        /* 
         * TODO:
         * - Run all testables within a showcase
        */
        PureModelContextData pureModelContextData = PureGrammarParser.newInstance().parseModel(pureGrammar, "", 0, 0, true);
        PureGrammarComposer grammarComposer = PureGrammarComposer.newInstance(PureGrammarComposerContext.Builder.newInstance().build());

        // Grammar composer adds a trailing newline
        assertEquals(pureGrammar + "\n", grammarComposer.renderPureModelContextData(pureModelContextData));
        
        Compiler.compile(pureModelContextData, DeploymentMode.PROD, Lists.mutable.empty());
    }
}
