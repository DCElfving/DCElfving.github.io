let face;
let angleX;
let angleY;

function preload() {
  livia = loadModel('livia.obj');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
 orbitControl();
 background (0);
 scale (4);
 ambientLight(255, 255, 255);
 directionalLight(255, 229, 204, 0, 0, -1);
 stroke(96, 96, 96);
 strokeWeight(.35);
 translate (0, 10);
 angleMode(DEGREES);
 rotateZ(180);
 model(livia);
 fill(128, 128, 128);
}
