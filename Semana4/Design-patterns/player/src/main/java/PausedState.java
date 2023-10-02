class PausedState implements State {
    MediaPlayer player;
    public PausedState(MediaPlayer player) {
        this.player = player;
    }
    @Override
    public void play() {
        System.out.println("Reanudando la reproducción");
        player.changeState(new PlayingState(player));
    }

    @Override
    public void pause() {
        System.out.println("Ya se encuentra en pausa");
    }

    @Override
    public void stop() {
        System.out.println("Deteniendo la reproducción");
        player.changeState(new StoppedState(player));
    }
}
