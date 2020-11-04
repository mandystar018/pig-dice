function Game () {
  this.players = [];
  // this.currentId = 0;
  // this.score = 0;
}

Game.prototype.addPlayer = function(player) {
  // player.id = this.assignId();
  this.players.push(player);
}

function Player() {
  this.currentScore = 0;
  this.totalScore = 0;
}

let playerOne = new Player("Player One");
let playerTwo = new Player("Player Two");



Player.prototype.roll = function () {
  let roll = Math.floor((Math.random() * 6 ) +1 ); 
}


// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }


// Game.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
//loop that runs thru minium 7 with Math.random


// User Interface Logic --------------------

$(document).ready(function() {
  const player1 = $("#player-one").val();
  const player2 = $("#player-two").val();

  
}