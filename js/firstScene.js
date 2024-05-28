class FirstScene {
    // 変数の宣言
    constructor(){
        this._pg = createGraphics(width, height);

        this._n = 30;
        this._x = [];
        this._y = [];
        this._vx = [];
        this._vy = [];
        this._r = [];
        this._c = [];
    }

    // setupに書きたい処理を書く
    setup(){
        this._pg.textFont("Arial");

        this._pg.noStroke();

        for (let i = 0; i < this._n; i++) {
            this._x.push(random(width));
            this._y.push(random(height));
            this._r.push(random(10, 100));
            this._c.push(color(random(255), random(100, 255), random(200)), random(255));
            this._vx.push(random(-5, 5));
            this._vy.push(random(-5, 5));
        }
    }

    // drawに書きたい処理を書く
    draw(spectrum) {
        this._pg.background(0);

        for (let i = 0; i < this._n; i++) {
            this._x[i] += this._vx[i];
            this._y[i] += this._vy[i];

            if (this._x[i] < 0 || this._x[i] > width) {
                this._vx[i] *= -1;
            }
            if (this._y[i] < 0 || this._y[i] > height) {
                this._vy[i] *= -1;
            }

            this._pg.fill(this._c[i]);
            this._pg.ellipse(this._x[i], this._y[i], this._r[i] * spectrum[floor(spectrum.length / 2)] + 10);
        }

        this._pg.fill(255);
        this._pg.textSize(200);
        this._pg.textAlign(CENTER);
        this._pg.text("First Scene", width / 2, height / 2);

        // 重くならないようにする関数
        this._pg.remove();
    }

    // このシーンを渡すための関数
    getScene(){
        return this._pg;
    }
}