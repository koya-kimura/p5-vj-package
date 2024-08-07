class SceneManager {
    constructor(){
        this._scenes = [];
        this._sceneIndex = 0;
        this._postShader = undefined;
        this._isKeyBEffectEnabled = false;
        this._isKeyNEffectEnabled = false;
        this._isKeyMEffectEnabled = false;
    }

    loadPostShader(vertFilePath, fragFilePath){
        this._postShader = loadShader(vertFilePath, fragFilePath);
    }

    addScene(scene){
        this._scenes.push(scene);
    }

    setup(){
        for(let i = 0; i < this._scenes.length; i++){
            this._scenes[i].setup();
        }
    }

    draw(spectrum){
        this._scenes[this._sceneIndex].draw(spectrum);

        shader(this._postShader);

        this._postShader.setUniform("u_time", frameCount * 0.01);
        this._postShader.setUniform("u_vol", spectrum[floor(spectrum.length / 2)]);
        this._postShader.setUniform("u_tex", this._scenes[this._sceneIndex].getScene());
        this._postShader.setUniform("u_isBEffectEnabled", this._isKeyBEffectEnabled);
        this._postShader.setUniform("u_isNEffectEnabled", this._isKeyNEffectEnabled);
        this._postShader.setUniform("u_isMEffectEnabled", this._isKeyMEffectEnabled);

        rect(0, 0, width, height);
    }

    keyPressed(key){
        let sceneNumbers = Array.from({length: this._scenes.length}, (v, i) => (i + 1).toString());
        if (sceneNumbers.includes(key)) {
            this._sceneIndex = int(key) - 1;
        }
        if(key == 'b' || key == 'B'){
            this._isKeyBEffectEnabled = !this._isKeyBEffectEnabled;
        }
        if(key == 'n' || key == 'N'){
            this._isKeyNEffectEnabled = !this._isKeyNEffectEnabled;
        }
        if(key == 'm' || key == 'M'){
            this._isKeyMEffectEnabled = !this._isKeyMEffectEnabled;
        }
    }
}