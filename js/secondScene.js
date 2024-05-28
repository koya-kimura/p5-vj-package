class SecondScene {
    constructor() {
        this._pg = createGraphics(width, height);
    }

    setup() {
        this._pg.textFont("Arial");
    }

    draw(spectrum) {
        this._pg.background(0);

        for(let i = 0; i < spectrum.length; i++){
            this._pg.stroke(noise(i) * 255, noise(i + 100) * 100, noise(i + 200) * 255);
            this._pg.noFill();
            this._pg.circle(width / 2, height / 2, spectrum[i] * 1000 + 100);
        }

        this._pg.fill(255);
        this._pg.textSize(200);
        this._pg.textAlign(CENTER);
        this._pg.text("Second Scene", width / 2, height / 2);

        this._pg.remove();
    }

    getScene() {
        return this._pg;
    }
}