'use strict';
const ansi = require('ansi')
  , cursor = ansi(process.stdout);

const stdin = process.stdin;

stdin.setEncoding('utf8');
stdin.setRawMode(true);
let posx = 1, posy = 0;

const _Keys = new Map();
_Keys.set('\u001B\u005B\u0041', 'UP');
_Keys.set('\u001B\u005B\u0042', 'DOWN');
_Keys.set('\u001B\u005B\u0043', 'RIGHT');
_Keys.set('\u001B\u005B\u0044', 'LEFT');
_Keys.set(' ', 'TOGGLE_LIFE');
_Keys.set('\u0003', 'EXIT');

class CommandReader {
	getKeyboardInput(executeAction) {
		stdin.on('data', function(key){
			console.log(_Keys.get(key));
			executeAction(_Keys.get(key));
		});
	}
}

module.exports = CommandReader;