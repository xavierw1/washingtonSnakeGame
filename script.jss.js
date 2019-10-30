var score;
var bestScore;
var gameplaying;
var snakeArray;
var applex;
var appley;
var direction;


function setup() {
      noLoop();
      gameplaying = false; 
      createCanvas(400,480);
      framerate(5);
      score = 0;
      bestScore = loadBestScore();
      
      snakeArray = [];
      makeSnakePiece(60,200);
      makeSnakePiece(40,200);
      makeSnakePiece(20,200);

      applex = 200;
      appley = 200; 
 
      direction = "RIGHT";

    Textsize(18);

}