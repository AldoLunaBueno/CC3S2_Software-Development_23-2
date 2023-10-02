class StoppedState implements State {
    MediaPlayer player;
    public StoppedState(MediaPlayer player) {
        this.player = player;
    }
    @Override
    public void play() {
        System.out.println("Iniciando la reproducción");
        player.changeState(new PlayingState(player));
    }

    @Override
    public void pause() {
        System.out.println("No se puede poner en pausa, la reproducción está detenida");
    }

    @Override
    public void stop() {
        System.out.println("La reproducción ya está detenida");
    }
}
