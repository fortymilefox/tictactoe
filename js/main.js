import Game from "./game.js";
import GameView from "./gameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("gameboard"));

gameView.onTileClick = function(i) {
  game.makeMove(i);
  gameView.update(game); //passes in current state of game
};

gameView.onRestartClick = function() {
  game = new Game();
  gameView.update(game);
};

gameView.update(game);