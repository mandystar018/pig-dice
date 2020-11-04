function Game () {
  this.players = [];
  this.currentId = 0;
  this.score = 0;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Player()





//loop that runs thru minium 7 with Math.random