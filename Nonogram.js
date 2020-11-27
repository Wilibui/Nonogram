let level = [];
let Ynumbers = [];
let Xnumbers = [];
let currentGrid = [];
let grid = [[], []];
let w;
let current = 1;
let lives = 3;
let wrongSquare = [0, 0];
let wrongA = 255;
let running = true;
let death = false;


function setup() {
  rectMode(CENTER, CENTER);

  level_1();
  setupCurrentGrid();
  setupCanvas();
  setupGrid();
}

function draw() {
  setupCanvas();
  background(200);
  
  showNumbers();
  showGrid();
   
  showCurrent();
  showWrong();
  showLives();
  
  if(death){
    gameOver();
  }
  
  checkIfWin();
}

function mousePressed() {
  if (running) {
    checkGrid();
    checkCurrent();
  }else{
    checkAgain();
  }
}
function mouseDragged(){
  if (running) {
    checkGrid();
  }
}
