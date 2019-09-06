function preload() {
  eye = loadImage('eye.png');
  blink_load = loadImage('blink.gif');
  blink_create = createImg('blink.gif');
  lips_load = loadImage('lips.gif');
  lips_create = createImg('lips.gif');
  spex = loadImage('spex.png');
  schnozz = loadImage('nose.png');
  bg_load = loadImage('headroom.gif');
  bg_create = createImg('headroom.gif');
}

function setup() {
  createCanvas(480, 640);  
}

function draw() {
  bg_create.position(0,0);
  bg_create.size(480, 640);
  bg_create.style('z-index: -100')
  image(eye, 70, 100, 100, 100);
  blink_create.position(305, 90);
  blink_create.size(100, 100);
  image(schnozz, 150, 80, 175, 350);
  image(spex, 10, 70, 450, 150);
  lips_create.position(150, 400);
  lips_create.size(200, 200);
}