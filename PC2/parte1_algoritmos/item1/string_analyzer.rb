# frozen_string_literal: true

class StringAnalyzer
  # @param [String] str
  # @return [String]
  def pick_one_missed(str)
    alphabet = Array.new(26, false)
    str.downcase
    str = str.gsub(/\s+/, "")
    str.each_byte do |c|
      c -= 97
      alphabet[c] = true if alphabet[c] == false
    end
    c = alphabet.index(false) + 97
    c.chr
  end
end

sa = StringAnalyzer.new
str = 'the quick brown box jumps over a lazy dog'
puts "La letra faltante en '#{str}' es '#{sa.pick_one_missed(str)}'"
