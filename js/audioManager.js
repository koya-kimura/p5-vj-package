class AudioManager {
    constructor() {
        this._sound = undefined;
        this._fft = undefined;
    }
    load(audioFIlePath) {
        this._sound = loadSound(audioFIlePath)
    }

    init() {
        this._fft = new p5.FFT(0.8, 32);
    }

    analyze() {
        let spectrum = this._fft.analyze();
        for (let i = 0; i < spectrum.length; i++) {
            spectrum[i] = map(spectrum[i], 0, 255, 0, 1);
        }
        return spectrum;
    }

    play(){
        if (this._sound.isPlaying()) {
            this._sound.pause();
        } else {
            this._sound.loop();
        }
    }
}