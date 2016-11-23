'use strict';

var Game = require('./Game');
var Board = require('./Board');
var CellsGrid = require('./CellsGrid');
var Renderer = require('./Renderer');
var CommandReader = require('./CommandReader');

var game = new Game(new Board(), new Renderer(), new CellsGrid(20), new CommandReader());
game.init();
game.logic();
//# sourceMappingURL=Main.js.map
