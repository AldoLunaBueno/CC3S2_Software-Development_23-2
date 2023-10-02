// Interfaz para el reproductor de medios
interface MediaPlayer {
    void play();

    void pause();

    void stop();

    State getState();
    void changeState(State newState);
}
