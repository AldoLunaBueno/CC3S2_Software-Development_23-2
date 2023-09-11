# spec/string_calculator_spec.rb

require "string_calculator"

describe StringCalculator do
    # add class method: given an empty string, it returns zero
    describe ".add" do        
        context "given an empty string" do
            it "returns zero" do
                expect(StringCalculator.add("")).to eq(0)
            end
        end
    end

    # add class method: given a single number in a string, 
    # it returns the number
    describe ".add" do
        context "single number" do
            context "given '4'" do
                it "returns 4" do
                    expect(StringCalculator.add("4")).to eql(4)
                end
            end
            context "given '10'" do
                it "returns 10" do
                    expect(StringCalculator.add("10")).to eql(10)
                end
            end
        end
    end

    # add class method: given two numbers in a string separeted by a comma,
    # in returns the sum of the numbers
    describe ".add" do
        context "two numbers" do
            context "given '2,4'" do
                it "returns '6'" do
                    expect(StringCalculator.add("2,4")).to eql(6)
                end
            end
            context "given '17,100'" do
                it "returns 117" do
                    expect(StringCalculator.add("17,100")).to eql(117)
                end
            end
        end
    end
end