const LunarSpacecraft = require('./lunarSpacecraft');

const startingPosition = [0, 0, 0];
const initialDirection = 'N';
const commands = ['f', 'r', 'u', 'b', 'l'];

const spacecraft = new LunarSpacecraft(startingPosition, initialDirection);
spacecraft.processCommands(commands);

console.log('Final Position:', spacecraft.position);
console.log('Final Direction:', spacecraft.direction);
