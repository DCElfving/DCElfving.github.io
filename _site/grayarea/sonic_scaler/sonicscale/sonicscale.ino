// ---------------------------------------------------------------------------
// Example NewPing library sketch that does a ping about 20 times per second.
// ---------------------------------------------------------------------------

#include <NewPing.h>
#define TRIGGER_PIN  7  // Arduino pin tied to trigger pin on the ultrasonic sensor.
#define ECHO_PIN     8  // Arduino pin tied to echo pin on the ultrasonic sensor.
#define MAX_DISTANCE 50 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.

const int SW_pin = 2; // digital pin connected to switch output
const int X_pin = 0; // analog pin connected to X output
const int Y_pin = 1; // analog pin connected to Y output

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // NewPing setup of pins and maximum distance.

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(115200); // Open serial monitor at 115200 baud to see ping results.
}

void loop() {
  delay(50);

  //ultrasonic
  int distance = sonar.ping_cm();

  Serial.print("[");

  if (distance < 1) {
    Serial.print(1);
  }

  else {
  Serial.print(distance);
  }

  Serial.print(",");

  //button
  Serial.print(digitalRead(SW_pin));
  Serial.print(",");

  //x-axis
  Serial.print(analogRead(X_pin));
  Serial.print(",");

  //y-axis
  Serial.print(analogRead(Y_pin));
  Serial.print("]");
  Serial.print("\n");
}
