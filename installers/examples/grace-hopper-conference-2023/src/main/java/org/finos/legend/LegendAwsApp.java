package org.finos.legend;

import org.finos.legend.stack.LegendAwsStack;

import software.amazon.awscdk.App;
import software.amazon.awscdk.BootstraplessSynthesizer;
import software.amazon.awscdk.StackProps;

public class LegendAwsApp {
    public static void main(final String[] args) {
        App app = new App();

        new LegendAwsStack(app, "LegendAwsStack", StackProps
                .builder()
                .synthesizer(new BootstraplessSynthesizer())
                .build());

        app.synth();
    }
}