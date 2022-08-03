package org.finos.legend.demo.app;

import org.finos.legend.engine.plan.execution.stores.relational.result.RelationalResult;
import org.finos.legend.showcase.showcase2.service.persons;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class LegendApplication
{
    public List<String> getPersons() throws Exception
    {
        List<String> persons = new ArrayList<>();
        persons personsService = new persons();
        RelationalResult relationalResult = (RelationalResult) personsService.execute();
        ResultSet resultSet = relationalResult.resultSet;
        while (resultSet.next())
        {
            persons.add(resultSet.getString(1));
        }
        return persons;
    }
}
