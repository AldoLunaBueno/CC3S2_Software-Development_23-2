import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

class StringCalculatorTest {
    StringCalculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new StringCalculator();
    }

    @Test
    @DisplayName("given an empty string, it returns zero")
    void emptyString() {
        int result = calculator.add("");
        int expected = 0;
        assertEquals(expected, result);
    }

    @ParameterizedTest
    @DisplayName("given a single number in a string, returns the number")
    @MethodSource
    void singleNumber(String input, int expected) {
        int result = calculator.add(input);
        assertEquals(expected, result);
    }
    static Stream<Arguments> singleNumber() {
        return Stream.of(
                Arguments.of("4", 4),
                Arguments.of("10", 10)
        );
    }

    @ParameterizedTest
    @DisplayName("given two numbers in a string, returns the sum")
    @MethodSource
    void twoNumbers(String input, int expected) {
        int result = calculator.add(input);
        assertEquals(expected, result);
    }
    static Stream<Arguments> twoNumbers() {
        return Stream.of(
                Arguments.of("2,4", 6),
                Arguments.of("17,100", 117)
        );
    }
}