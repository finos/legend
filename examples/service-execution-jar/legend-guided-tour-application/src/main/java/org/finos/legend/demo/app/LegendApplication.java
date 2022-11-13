package org.finos.legend.demo.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.eclipse.collections.api.list.ImmutableList;
import org.eclipse.collections.impl.utility.ListIterate;
import org.finos.legend.engine.language.pure.dsl.service.execution.ServiceRunner;
import org.finos.legend.engine.language.pure.dsl.service.execution.ServiceRunnerBuilder;
import org.finos.legend.engine.language.pure.dsl.service.execution.ServiceRunnerInput;

import java.util.List;
import java.util.Map;

public class LegendApplication
{
    public ImmutableList<String> getAllFirmNamesViaM2M() throws Exception
    {
        ServiceRunner serviceRunner = ServiceRunnerBuilder
                .newInstance()
                .withServiceRunnerClass("org.finos.legend.showcase.guided_tour.service.m2m.service1")
                .build();
        ServiceRunnerInput serviceRunnerInput = ServiceRunnerInput
                .newInstance();
        String result = serviceRunner.run(serviceRunnerInput);
        return this.parse(result);
    }

    private ImmutableList<String> parse (String resultJSON) throws Exception
    {
        Map jsonMap = new ObjectMapper().readValue(resultJSON, Map.class);
        List valuesList = (List)jsonMap.get("values");
        ImmutableList<Map> firms = ListIterate.collect(valuesList, item -> (Map) ((Map) item).get("value")).toImmutable();
        ImmutableList<String> legalNames = firms.collect(firm -> (String)firm.get("legalName")).toImmutable();
        return legalNames;
    }

    public static void main(String[] args) throws Exception
    {
        new LegendApplication().getAllFirmNamesViaM2M();
    }
}
