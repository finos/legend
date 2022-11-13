package org.finos.legend.demo.app;

import org.eclipse.collections.api.factory.Lists;
import org.eclipse.collections.api.list.ImmutableList;
import org.junit.Test;

import static org.junit.Assert.*;

public class LegendApplicationTest
{
    @Test
    public void testM2MMapping() throws Exception
    {
        LegendApplication legendApplication = new LegendApplication();
        ImmutableList<String> firmNames = legendApplication.getAllFirmNamesViaM2M();
        assertEquals(Lists.immutable.of("ACME Corp.", "Monsters Inc."), firmNames);
    }

    // TODO - Add test for relational mapping
}