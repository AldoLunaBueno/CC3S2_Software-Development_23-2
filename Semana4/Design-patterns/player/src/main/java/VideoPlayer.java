// Clase concreta para el reproductor de videos
class VideoPlayer implements MediaPlayer {
    private State state;

    public VideoPlayer() {
        // state = new StoppedState(this);
    }

    @Override
    public void play() {
        state.play();
    }

    @Override
    public void pause() {
        state.pause();
    }

    @Override
    public void stop() {
        state.stop();
    }

    @Override
    public State getState() {
        return state;
    }

    public void changeState(State newState) {
        state = newState;
    }
}
