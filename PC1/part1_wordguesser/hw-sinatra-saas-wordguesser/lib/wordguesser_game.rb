class WordGuesserGame
  # add the necessary class methods, attributes, etc. here
  # to make the tests in spec/wordguesser_game_spec.rb pass.

  # Get a word from remote "random word" service
  attr_accessor :word, :guesses, :wrong_guesses
  def initialize(word)
    @word = word
    @guesses = ''
    @wrong_guesses = ''
    @current_status = :play
  end

  # You can test it by installing irb via $ gem install irb
  # and then running $ irb -I. -r app.rb
  # And then in the irb: irb(main):001:0> WordGuesserGame.get_random_word
  #  => "cooking"   <-- some random word
  def self.get_random_word
    require 'uri'
    require 'net/http'
    uri = URI('http://randomword.saasbook.info/RandomWord')
    Net::HTTP.new('randomword.saasbook.info').start { |http|
      return http.post(uri, "").body
    }
  end
  def guess(new_guess)

    raise ArgumentError if new_guess.nil?
    raise ArgumentError if new_guess.empty?
    raise ArgumentError if new_guess =~ /[^a-zA-Z]+/

    new_guess.downcase!

    if (!@guesses.include? new_guess) && (!@wrong_guesses.include? new_guess)
      if @word.include? new_guess
        @guesses << new_guess
        @current_status = :win if !word_with_guesses.include?('-') && @current_status != :lose
        return true
      else
        @wrong_guesses << new_guess
        @current_status = :lose if @wrong_guesses.length >= 7
        return true
      end
    end

    false
  end

  def word_with_guesses
    re = @guesses.empty? ? '.' : "[^#{@guesses}]"
    regexp = Regexp.new(re, Regexp::IGNORECASE)
    @word.gsub(regexp , '-')
  end

  def check_win_or_lose
    @current_status
  end

end
