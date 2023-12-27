require_relative 'lib/tennis_scorer'

RSpec.describe "TennisScorer" do
  describe "puntuación básica" do
    it "empieza con un marcador de 0-0" do
      ts = TennisScorer.new
      expect(ts.score).to eq("0-0")
    end
    # ... otras especificaciones ...
  end
end
