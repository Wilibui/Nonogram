function win() {
  running = false;
  stroke(0);
  fill(0, 255, 0, 200);
  rect(9.5 * w, 9.5 * w, 9 * w, 5.5 * w, 50);  
  rect(9.5 * w, 11 * w, 4 * w, 2 * w, 50);
  noStroke();
  textSize(2.5 * w);
  fill(0);
  text("WIN", 9.5 * w, 8.5 * w);
  textSize(w);
  text("NEW", 9.5 * w, 11.1 * w);
}

function checkIfWin() {
  levelOnes = 0;
  currentOnes = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (level[i][j] == 1) {
        levelOnes++;
      }
      if (currentGrid[i][j] == 1) {
        currentOnes++;
      }
    }
  }
  
  if (levelOnes == currentOnes) {
    won = true;
  }
}

function checkNew() {   
  if (mouseX > 9.5 * w - 2 * w && mouseX < 9.5 * w + 2 * w) {
    if (mouseY > 11 * w - w && mouseY < 11 * w + w) {
      setupLevel(l);
      setupCurrentGrid();
      setupCanvas();
      setupGrid();
      setupNumbers();
      
      timer = 50;
      lives = 3;
      won = false;
      running = true;
    }
  }
}
