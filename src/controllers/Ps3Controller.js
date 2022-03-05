const joystick = require("joystick");

class Ps3Controller {
  constructor() {
    // Init PS3 controller, 0 = /dev/input/js0
    // second param = deadzone of joystick
    // third param = sensitivity
    this.controller = new joystick(0, 3500, 350);
    console.log("Controller initialized");
  }

  listen() {
    console.log("Starting listeners:");
    // On button press (triggers when pressed and when released)
    this.controller.on("button", (button) => {
      switch (button.number) {
        case 0: // cross
          this.onCrossClick(button);
          break;
        case 1: // circle
          this.onCircleClick(button);
          break;
        case 2: // triangle
          this.onTriangleClick(button);
          break;
        case 3: // square
          this.onSquareClick(button);
          break;
      }
    });

    // On axis movement
    this.controller.on("axis", (axis) => {
      switch (axis.number) {
        case 1: // left y-axis
          this.onLeftAxisMove(axis);
          break;
        case 4: // right y-axis
          this.onRightAxisMove(axis);
          break;
      }
    });
  }

  onCrossClick(button) {
    console.log("cross click", button);
  }

  onCircleClick(button) {
    console.log("circle click", button);
  }

  onTriangleClick(button) {
    console.log("triangle click", button);
  }

  onSquareClick(button) {
    console.log("square click", button);
  }

  onLeftAxisMove(axis) {
    console.log("Left JoyStick axis", axis);
  }

  onRightAxisMove(axis) {
    console.log("Right JoyStick axis", axis);
  }
}

module.exports = Ps3Controller;
