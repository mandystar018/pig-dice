function Game () {
  this.players = [];
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}

function Player(name) {
  this.currentScore = 0;
  this.totalScore = 0;
  this.name = name;
}

Player.prototype.dice = function(rollDice) {
  let  = randomDice();
}

// User Interface Logic --------------------

function randomDice(){
  let roll = Math.floor(Math.random() * 6)+1;
  $(".roll").click(function() {
    $("").show(this.currentScore); // player1.currentscore();
    return roll
  });
  
  
}



let game = new Game();
$(document).ready(function() {
  $("#new-game").submit(function(event) {
    event.preventDefault();
    const player1 = $("#player1").val();
    const player2 = $("#player2").val();

    $("#player1").val("");
    $("#player2").val("")

    let playerOne = new Player(player1);
    let playerTwo = new Player(player2);

    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
  });
});