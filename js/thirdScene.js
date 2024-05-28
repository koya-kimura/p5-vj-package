class ThirdScene {
    constructor() {
        this._pg = createGraphics(width, height);
    }

    setup() {
        this._pg.textFont("Arial");
        this._pg.rectMode(CENTER);
    }

    draw(spectrum) {
        this._pg.background(0);

        for(let i = 0; i < 10; i ++){
            this._pg.push();
            this._pg.translate(width / 2, height / 2);
            this._pg.rotate(i * 0.1 + frameCount * spectrum[floor(spectrum.length / 2)] * 0.01 * (i+1));
            this._pg.fill(noise(i) * 255, noise(i + 100) * 100, noise(i + 200) * 50, 50);
            this._pg.noStroke();
            this._pg.rect(0, 0, 600, 600);
            this._pg.pop();
        }

        this._pg.fill(255);
        this._pg.textSize(200);
        this._pg.textAlign(CENTER);
        this._pg.text("Third Scene", width / 2, height / 2);

        this._pg.remove();
    }

    getScene() {
        return this._pg;
    }
}