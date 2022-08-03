package org.finos.legend.demo.app;

import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class LegendApplicationTest
{
    @Test
    public void testGetPersons() throws Exception
    {
        LegendApplication legendApplication = new LegendApplication();
        List<String> persons = legendApplication.getPersons();
        assertEquals(2, persons.size());
        assertEquals("Jane Doe", persons.get(0));
        assertEquals("John Doe", persons.get(1));
    }
}