package org.example;

import org.finos.legend.engine.language.pure.grammar.from.PureGrammarParser;
import org.finos.legend.engine.language.pure.grammar.to.PureGrammarComposer;
import org.finos.legend.engine.language.pure.grammar.to.PureGrammarComposerContext;
import org.finos.legend.engine.protocol.pure.v1.model.context.PureModelContextData;
import org.finos.legend.engine.shared.core.api.grammar.RenderStyle;

import java.io.IOException;
import java.nio.file.*;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Utility class to format showcase .pure files using the PureGrammarParser and PureGrammarComposer.
 * This helps developers maintain consistent formatting when adding new showcases.
 */
public class ShowcaseFormatter {
    private static final PathMatcher PURE_FILE_MATCHER = FileSystems.getDefault().getPathMatcher("glob:*.pure");

    /**
     * Main method to run the formatter from the command line.
     * Usage: java org.example.ShowcaseFormatter [directory]
     * If no directory is specified, defaults to "data" in the current directory.
     */
    public static void main(String[] args) {
        String directory = args.length > 0 ? args[0] : "data";
        try {
            formatDirectory(Paths.get(directory));
            System.out.println("Formatting completed successfully.");
        } catch (IOException e) {
            System.err.println("Error formatting files: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Format all .pure files in the specified directory and its subdirectories.
     *
     * @param directory the directory containing .pure files to format
     * @throws IOException if an I/O error occurs
     */
    public static void formatDirectory(Path directory) throws IOException {
        if (!Files.isDirectory(directory)) {
            throw new IllegalArgumentException("Not a directory: " + directory);
        }

        Set<Path> pureFiles = findPureFiles(directory);
        System.out.println("Found " + pureFiles.size() + " .pure files to format.");

        for (Path file : pureFiles) {
            formatFile(file);
        }
    }

    /**
     * Find all .pure files in the specified directory and its subdirectories.
     *
     * @param directory the directory to search in
     * @return a set of paths to .pure files
     * @throws IOException if an I/O error occurs
     */
    private static Set<Path> findPureFiles(Path directory) throws IOException {
        try (Stream<Path> pathStream = Files.walk(directory)) {
            return pathStream
                    .filter(p -> !Files.isDirectory(p))
                    .filter(p -> PURE_FILE_MATCHER.matches(p.getFileName()))
                    .collect(Collectors.toSet());
        }
    }

    /**
     * Format a single .pure file.
     *
     * @param filePath the path to the .pure file
     * @throws IOException if an I/O error occurs
     */
    public static void formatFile(Path filePath) throws IOException {
        System.out.println("Formatting file: " + filePath);

        try {
            // Read the file content and strip comments
            String pureGrammar = Files.readAllLines(filePath).stream()
                    .filter(l -> !l.stripLeading().startsWith("//"))
                    .collect(Collectors.joining("\n"));

            if (pureGrammar.isEmpty()) {
                System.out.println("Skipping empty file: " + filePath);
                return;
            }

            // Parse the grammar
            PureModelContextData pureModelContextData = PureGrammarParser.newInstance().parseModel(pureGrammar, "", 0, 0, true);
            
            // Format the grammar with pretty printing
            PureGrammarComposer grammarComposer = PureGrammarComposer.newInstance(
                    PureGrammarComposerContext.Builder.newInstance().withRenderStyle(RenderStyle.PRETTY).build());
            
            // Get the formatted grammar
            String composedPureGrammar = grammarComposer.renderPureModelContextData(pureModelContextData);
            
            // Write the formatted grammar back to the file
            Files.write(filePath, composedPureGrammar.getBytes());
            
            System.out.println("Successfully formatted: " + filePath);
        } catch (Exception e) {
            System.err.println("Error formatting file " + filePath + ": " + e.getMessage());
            e.printStackTrace();
        }
    }
}
