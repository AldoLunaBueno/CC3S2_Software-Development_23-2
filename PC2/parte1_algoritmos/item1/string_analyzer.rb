# frozen_string_literal: true

class StringAnalyzer
  def pick_one_missed(str)
    alphabet = Array.new(26, false)
    str.downcase
    str = str.gsub(/\s+/, "")
    str.each_byte do |c|
      if alphabet[c-97] == false
        alphabet[c-97] = true
      end
    end
    c = alphabet.index(false) + 97
    puts c.chr
  end
end

sa = StringAnalyzer.new()
sa.pick_one_missed('the quick brown box jumps over a lazy dog')