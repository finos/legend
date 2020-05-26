package com.gs.alloy;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class HttpServer extends Application<ServerConfiguration>
{
    public static void main( String[] args ) throws Exception
    {
        new HttpServer().run(args);
    }

    @Override
    public void initialize(Bootstrap<ServerConfiguration> bootstrap) {
        bootstrap.addBundle(new AssetsBundle("/assets", "/"));
    }

    @Override
    public void run(ServerConfiguration serverConfiguration, Environment environment) throws Exception {
        environment.jersey().setUrlPattern("/api/*");
    }
}
