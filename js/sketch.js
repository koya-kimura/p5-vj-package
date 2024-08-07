let audioManager = new AudioManager();
let sceneManager = new SceneManager();

function preload() {
    audioManager.load("/asset/sound/Inside.mp3");
    sceneManager.loadPostShader("/shader/main.vert", "/shader/main.frag");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    sceneManager.addScene(new FirstScene());
    sceneManager.addScene(new SecondScene());
    sceneManager.addScene(new ThirdScene());

    sceneManager.setup();
}

function draw() {
    sceneManager.draw(audioManager.analyze());
}

function keyPressed() {
    sceneManager.keyPressed(key);
}

function mousePressed() {
    audioManager.play();
}