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

function setup() {
  rectMode(CENTER, CENTER);

  level_1();
  setupCurrentGrid();
  setupCanvas();
  setupGrid();
}

function draw() {
  background(255);  

  setupCanvas();
  showGrid();
  showNumbers(); 
  showCurrent();
  showWrong();
  showLives();


  checkIfDone();
}

function mousePressed() {
  if (running) {
    checkGrid();
    checkCurrent();
  }
}
