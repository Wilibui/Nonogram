let level = [];

let Ynumbers = [[],[],[],[],[],[],[],[],[],[]];
let Xnumbers = [[],[],[],[],[],[],[],[],[],[]];

let currentGrid = [];
let grid = [[], []];

let ci;
let cj;
let ij;

let w;
let current = 1;
let lives = 3;
let l = 100;
let timer = 0;

let wrongSquare = [0, 0];
let wrongA = 255;

let running = true;
let death = false;
let won = false;

function setup() {
  rectMode(CENTER, CENTER);

  setupLevel(l);
  setupCurrentGrid();
  setupCanvas();
  setupGrid();
  setupNumbers();
  
  logo = new Logo();
}

function draw() {
  setupCanvas();
  background(170, 0, 0);
  
  showNumbers();
  showGrid();  
  showCurrent();
  showWrong();
  showLives();
  showTrademark();
  
  if(death){
    gameOver();
  }
  if(won){
    win();
  }
    
  checkIfWin();  
  timer--;
}

function mousePressed() {
  if (running) {
    if(timer < 0){
      checkGrid("p");
      checkCurrent();
    }
  }else if (death){
    checkAgain();
  }else if (won){
    checkNew();
  }
}
function mouseDragged(){
  if (running) {
    if(timer < 0){
      checkGrid("d");
    }
  }
}

function showTrademark(){
  textAlign(LEFT, BOTTOM);
  textSize(0.5 * w);
  noStroke();
  fill(0);
  text("Nonogram clone", 2.2 * w, height - 0.8 * w);
  text("Made By Wilibui", 2.2 * w, height - 0.2 * w);
  textAlign(CENTER, CENTER);
  logo.update(1.2 * w, height - w, w/2);
  logo.show();
}
