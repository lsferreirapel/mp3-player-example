import { secondsToMinutes } from './utils.js';

export default {
    get() {
        this.cover = document.querySelector('.card-image');
        this.title = document.querySelector('.card-content h5');
        this.artist = document.querySelector('.artist');

        this.playPause = document.getElementById('play-pause');
        this.volIcon = document.getElementById('volIcon');
        this.volumeControl = document.getElementById('vol-control');
        this.seekbar = document.getElementById('seekbar');
        this.currentDuration = document.getElementById('current-duration');
        this.totalDuration = document.getElementById('total-duration');
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    action() {
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.audio.onended = () => this.nextMusic();
        this.playPause.onclick = () => this.togglePlayPause();
        this.volIcon.onclick = () => this.toggleMute();
        this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
        this.volumeControl.onchange = () => this.setVolume(this.volumeControl.value);

        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;

        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
    }
}