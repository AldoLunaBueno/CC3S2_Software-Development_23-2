class VideoFactory extends MediaFactory {
    @Override
    public MediaPlayer createMediaPlayer() {
        return new VideoPlayer();
    }
}
