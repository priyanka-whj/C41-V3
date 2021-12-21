var canvas;
var backgroundImage, car1_img, car2_img, track;
var db, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() 
{
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);

  db = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  background(backgroundImage);
  if (playerCount === 2) 
  {
    game.updateState(1);
  }

  if (gameState === 1) 
  {
    game.play();
  }
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
