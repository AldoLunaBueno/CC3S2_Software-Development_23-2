import org.junit.jupiter.api.*;

public class Junit5Sample4Nested {
    @BeforeAll
    static void beforeAll() {
        System.out.println("**--- Junit5Sample4Nested :: beforeAll :: Executed once before all test methods ---**");
    }

    @BeforeEach
    void beforeEach() {
        System.out.println("**--- Junit5Sample4Nested :: beforeEach :: Executed before each test method ---**");
    }

    @AfterEach
    void afterEach() {
        System.out.println("**--- Junit5Sample4Nested :: afterEach :: Executed after each test method ---**");
    }

    @AfterAll
    static void afterAll() {
        System.out.println("**--- Junit5Sample4Nested :: afterAll :: Executed after all test method ---**");
    }

    @Nested
    class InnerClass {

        @BeforeEach
        void beforeEach() {
            System.out.println("**--- InnerClass :: beforeEach :: Executed before each test method ---**");
        }

        @AfterEach
        void afterEach() {
            System.out.println("**--- InnerClass :: afterEach :: Executed after each test method ---**");
        }

        @Test
        void testMethod1() {
            System.out.println("**--- InnerClass :: testMethod1 :: Executed test method1 ---**");
        }

        @Nested
        class InnerMostClass {

            @BeforeEach
            void beforeEach() {
                System.out.println("**--- InnerMostClass :: beforeEach :: Executed before each test method ---**");
            }

            @AfterEach
            void afterEach() {
                System.out.println("**--- InnerMostClass :: afterEach :: Executed after each test method ---**");
            }

            @Test
            void testMethod2() {
                System.out.println("**--- InnerMostClass :: testMethod2 :: Executed test method2 ---**");
            }
        }
    }
}
