var database;
var gamestate=0;
var playercount;
var form, player, game;

function setup(){
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    
}

