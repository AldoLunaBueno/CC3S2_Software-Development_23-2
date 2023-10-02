class MusicFactory extends MediaFactory {
    @Override
    public MediaPlayer createMediaPlayer() {
        return new MusicPlayer();
    }
}
