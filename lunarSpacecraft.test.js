const LunarSpacecraft = require('./lunarSpacecraft');

describe('LunarSpacecraft', () => {
  let spacecraft;

  beforeEach(() => {
    spacecraft = new LunarSpacecraft([0, 0, 0], 'N');
  });

  test('initial position and direction', () => {
    expect(spacecraft.position).toEqual([0, 0, 0]);
    expect(spacecraft.direction).toBe('N');
  });

  test('move forward', () => {
    spacecraft.moveForward();
    expect(spacecraft.position).toEqual([0, 1, 0]);
  });

  test('turn right', () => {
    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('E');
  });

  test('turn up', () => {
    spacecraft.turnUp();
    expect(spacecraft.direction).toBe('Up');
  });

  test('move backward', () => {
    spacecraft.moveBackward();
    expect(spacecraft.position).toEqual([0, 1, -1]);
  });

  test('turn left', () => {
    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('N');
  });

  test('process commands', () => {
    spacecraft.processCommands(['f', 'r', 'u', 'b', 'l']);
    expect(spacecraft.position).toEqual([0, 1, -1]);
    expect(spacecraft.direction).toBe('N');
  });
});
