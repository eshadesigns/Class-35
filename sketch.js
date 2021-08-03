var playerCount, gameState, database, backgroundImg;
var form, player, game;

function setup(){
database=firebase.database();
gameState=0;
game=new Game();
game.getState();
game.start();
createCanvas(800, 400);
}

function draw(){
    background("blue");
}