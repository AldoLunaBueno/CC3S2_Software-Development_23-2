// Adaptador para reproducir archivos de audio utilizando el reproductor de música
class SpanishMusicPlayerAdapter implements SpanishMediaPlayer {
    private MusicPlayer musicPlayer;
    private State state;

    public SpanishMusicPlayerAdapter() {
        this.musicPlayer = new MusicPlayer();
    }

    // Método adicional para reproducir archivos de audio específicos
    public void playAudio(String audioFileName) {
        System.out.println("Reproduciendo audio: " + audioFileName);
        // Aquí puedes agregar la lógica específica para reproducir el archivo de audio.
        // Puedes usar la instancia de musicPlayer para reproducir audio real si es necesario.
    }

    @Override
    public void reproducir() {
        musicPlayer.play();
    }

    @Override
    public void pausar() {
        musicPlayer.pause();
    }

    @Override
    public void detener() {
        musicPlayer.stop();
    }

    @Override
    public State obtenerEstado() {
        return musicPlayer.getState();
    }
}
