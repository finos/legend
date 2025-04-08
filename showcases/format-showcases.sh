#!/bin/bash

# Script to run the ShowcaseFormatter

# Build the project
mvn clean package

# Run the formatter
java -cp target/legend-showcases-1.0-SNAPSHOT-jar-with-dependencies.jar org.example.ShowcaseFormatter $@
