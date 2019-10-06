// --------------------------------------------------------
// 02-knob
// --------------------------------------------------------
let socket;
let diameter       = 1;
let lerpDiameter   = 0;
// let pointSizeX      = 150;
// let pointSizeY      = 150;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  startingX = window.innerWidth / 5;
  startingY = window.innerHeight / 5;

  // this works if you're running your server on the same port
  // if you're running from a separate server on a different port
  // you'll need to pass in the address to connect()
  socket = io.connect();

  // we listen for message on the socket server called 'data'
  socket.on('data',
    (data) => {
      console.log('sonic data: ', data.sonicData);
      if (parseInt(data.sonicData) != diameter) {
        diameter = map(parseInt(data.sonicData), 1, 50, 0.0, window.innerWidth);
        // background(0, 0, 0, 5);
      }
    }
  );
}

// --------------------------------------------------------
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// --------------------------------------------------------
function draw() {
  lerpDiameter = lerp(lerpDiameter, diameter, 0.10);
  background(255);
  fill(255, 204, 0);
  ellipse(width / 2, height /2, lerpDiameter);
}
