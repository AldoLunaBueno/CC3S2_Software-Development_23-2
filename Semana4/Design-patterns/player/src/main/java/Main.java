public class Main {
    public static void main(String[] args) {
        // Crear una instancia de AudioPlayerAdapter
        SpanishMusicPlayerAdapter spanishMusicPlayerAdapter = new SpanishMusicPlayerAdapter();

        // Reproducir música
        System.out.println("Reproduciendo música:");
        spanishMusicPlayerAdapter.reproducir();
        spanishMusicPlayerAdapter.pausar();
        spanishMusicPlayerAdapter.reproducir();
        spanishMusicPlayerAdapter.detener();
        spanishMusicPlayerAdapter.pausar();

        // Reproducir audio específico utilizando el método adicional
        System.out.println("\nReproduciendo archivo de audio:");
        spanishMusicPlayerAdapter.playAudio("cancion.mp3");

        // Obtener el estado actual
        State currentState = spanishMusicPlayerAdapter.obtenerEstado();
        System.out.println("Estado actual: " + currentState.getClass().getSimpleName());
    }
}
