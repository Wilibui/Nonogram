let level = [];

let Ynumbers = [[],[],[],[],[],[],[],[],[],[]];
let Xnumbers = [[],[],[],[],[],[],[],[],[],[]];

let currentGrid = [];
let grid = [[], []];

let w;
let current = 1;
let lives = 3;
let l;

let wrongSquare = [0, 0];
let wrongA = 255;

let running = true;
let death = false;

function setup() {
  rectMode(CENTER, CENTER);

  setupLevel();
  setupCurrentGrid();
  setupCanvas();
  setupGrid();
  setupNumbers();
}

function draw() {
  setupCanvas();
  background(200);
  
  showNumbers();
  showGrid();  
  showCurrent();
  showWrong();
  showLives();
  showTrademark();
  
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

function showTrademark(){
  textAlign(LEFT, BOTTOM);
  textSize(0.5 * w);
  noStroke();
  fill(0);
  text("Made By Wilibui", 0.2 * w, height - 0.2 * w);
  textAlign(CENTER, CENTER);
}
