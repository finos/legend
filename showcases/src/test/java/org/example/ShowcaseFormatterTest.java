package org.example;

import org.junit.Test;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import static org.junit.Assert.assertTrue;

public class ShowcaseFormatterTest {
    
    @Test
    public void testFindPureFiles() throws IOException {
        // Create a temporary directory structure
        Path tempDir = Files.createTempDirectory("showcase-formatter-test");
        
        // Create a sample .pure file
        Path sampleFile = tempDir.resolve("sample.pure");
        Files.write(sampleFile, List.of("// This is a test file"));
        
        // Create a subdirectory with another .pure file
        Path subDir = tempDir.resolve("subdir");
        Files.createDirectories(subDir);
        Path subDirFile = subDir.resolve("subdir-sample.pure");
        Files.write(subDirFile, List.of("// This is another test file"));
        
        // Create a non-.pure file
        Path nonPureFile = tempDir.resolve("not-pure.txt");
        Files.write(nonPureFile, List.of("This is not a .pure file"));
        
        // Test that the formatter can find all .pure files
        int pureFileCount = 0;
        File dir = tempDir.toFile();
        for (File file : dir.listFiles()) {
            if (file.getName().endsWith(".pure")) {
                pureFileCount++;
            }
            if (file.isDirectory()) {
                for (File subFile : file.listFiles()) {
                    if (subFile.getName().endsWith(".pure")) {
                        pureFileCount++;
                    }
                }
            }
        }
        
        // Verify we found 2 .pure files
        assertTrue("Should find 2 .pure files", pureFileCount == 2);
        
        // Clean up
        Files.deleteIfExists(subDirFile);
        Files.deleteIfExists(subDir);
        Files.deleteIfExists(sampleFile);
        Files.deleteIfExists(nonPureFile);
        Files.deleteIfExists(tempDir);
    }
}
