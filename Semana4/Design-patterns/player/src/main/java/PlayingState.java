class PlayingState implements State {
    MediaPlayer player;
    public PlayingState(MediaPlayer player) {
        this.player = player;
    }
    @Override
    public void play() {
        System.out.println("Ya se está reproduciendo");
    }

    @Override
    public void pause() {
        System.out.println("Pausando la reproducción");
        player.changeState(new PausedState(player));

    }

    @Override
    public void stop() {
        System.out.println("Deteniendo la reproducción");
        player.changeState(new StoppedState(player));
    }
}
