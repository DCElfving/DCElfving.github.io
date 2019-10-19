// --------------------------------------------------------
// 02-knob
// --------------------------------------------------------
let socket;
let diameter       = 0;
let lerpDiameter   = 0;
let x;
let y;
let hue;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  x = window.innerWidth / 2;
  y = window.innerHeight / 2;
  hue = color(255, 204, 0);

  // this works if you're running your server on the same port
  // if you're running from a separate server on a different port
  // you'll need to pass in the address to connect()
  socket = io.connect();

  // we listen for message on the socket server called 'data'
  socket.on('data',
    (data) => {
      arduinoInput = data.arduinoData;
      console.log('arduino data: ', arduinoInput);
      splitArduinoInput = JSON.parse(arduinoInput);

      if (splitArduinoInput[0] != diameter) {
        diameter = map(splitArduinoInput[0], 1, 50, 0.0, window.innerWidth);
      }

      if (splitArduinoInput[1] == 0) {
        hue = color('red');
      }

      else {
        hue = color(244, 204, 0);
      }

      x = map(splitArduinoInput[2], 0, 1023, 0.0, window.innerWidth);
      y = map(splitArduinoInput[3], 0, 1023, 0.0, window.innerHeight);

        // background(0, 0, 0, 5);
      }
  );
}


// socket.on('data',
//     (data) => {
//       arduinoInput = data.arduinoData;
//       console.log('arduino data: ', arduinoInput);
// ​
//       splitArduinoInput = split(arduinoInput, ' ');
// ​
//       if (splitArduinoInput[0] == 'b1') {
//         buttonPressed = true;
//       } else {
//         buttonPressed = false;
//       }
// ​
//       potValue = splitArduinoInput[1].substring(1);
//       if ((Math.abs(potValue - prevPotValue)) >= 2  )   {
//         bPotChanged = true;
//       } else {
//         bPotChanged = false;
//       }
//       prevPotValue = potValue;
// ​
//     }
//   );
// }


// --------------------------------------------------------
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// --------------------------------------------------------
function draw() {
  lerpDiameter = lerp(lerpDiameter, diameter, 0.10);
  background (255);
  fill (hue);
  ellipse(x, y, lerpDiameter);
}
