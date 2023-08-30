class LunarSpacecraft {
  constructor(initialPosition, initialDirection) {
    this.position = initialPosition;
    this.direction = initialDirection;
  }

  moveForward() {
    if (this.direction === 'N') {
      this.position[1]++;
    } else if (this.direction === 'S') {
      this.position[1]--;
    } else if (this.direction === 'E') {
      this.position[0]++;
    } else if (this.direction === 'W') {
      this.position[0]--;
    } else if (this.direction === 'Up') {
      this.position[2]++;
    } else if (this.direction === 'Down') {
      this.position[2]--;
    }
  }

  moveBackward() {
    if (this.direction === 'N') {
      this.position[1]--;
    } else if (this.direction === 'S') {
      this.position[1]++;
    } else if (this.direction === 'E') {
      this.position[0]--;
    } else if (this.direction === 'W') {
      this.position[0]++;
    } else if (this.direction === 'Up') {
      this.position[2]--;
    } else if (this.direction === 'Down') {
      this.position[2]++;
    }
  }

  turnLeft() {
    if (this.direction === 'N') {
      this.direction = 'W';
    } else if (this.direction === 'S') {
      this.direction = 'E';
    } else if (this.direction === 'E') {
      this.direction = 'N';
    } else if (this.direction === 'W') {
      this.direction = 'S';
    } else if (this.direction === 'Up') {
      this.direction = 'N';
    } else if (this.direction === 'Down') {
      this.direction = 'S';
    }
  }

  turnRight() {
    if (this.direction === 'N') {
      this.direction = 'E';
    } else if (this.direction === 'S') {
      this.direction = 'W';
    } else if (this.direction === 'E') {
      this.direction = 'S';
    } else if (this.direction === 'W') {
      this.direction = 'N';
    }
  }

  turnUp() {
    if (this.direction === 'N') {
      this.direction = 'Up';
    } else if (this.direction === 'S') {
      this.direction = 'Down';
    }
  }

  turnDown() {
    if (this.direction === 'Up') {
      this.direction = 'N';
    } else if (this.direction === 'Down') {
      this.direction = 'S';
    }
  }

  processCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case 'f':
          this.moveForward();
          break;
        case 'b':
          this.moveBackward();
          break;
        case 'l':
          this.turnLeft();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'u':
          this.turnUp();
          break;
        case 'd':
          this.turnDown();
          break;
        default:
          // Handle invalid command
          break;
      }
    }
  }
}

module.exports = LunarSpacecraft;
