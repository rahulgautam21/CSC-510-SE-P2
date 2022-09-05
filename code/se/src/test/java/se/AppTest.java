package se;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    @Test
    public void shouldAnswerWithTrue()
    {
        // Add two numbers and verify the result
        Calculator calc = new Calculator();

        int resultTrue = calc.addNumbers(3, 5);
        assertEquals(8, resultTrue);
    }
}
