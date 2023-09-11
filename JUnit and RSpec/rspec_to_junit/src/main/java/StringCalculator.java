import java.util.Arrays;

public class StringCalculator {
    public int add(String input) {
        if (input.isEmpty())
            return 0;
        else {
            String[] numsStr = input.split(",");
            int sum = Arrays.stream(numsStr)
                    .mapToInt(Integer::parseInt)
                    .sum();
            return sum;
        }
    }
}
