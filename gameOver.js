function gameOver() {
  running = false;
  stroke(0);
  fill(255, 0, 0, 200);
  rect(9.5 * w, 9.5 * w, 9 * w, 5.5 * w, 50);  
  rect(9.5 * w, 11 * w, 4 * w, 2 * w, 50);
  noStroke();
  textSize(1.3 * w);
  fill(0); 
  text("GAME OVER", 9.5 * w, 8.5 * w);
  textSize(w);
  text("AGAIN", 9.5 * w, 11.1 * w);
}

function checkAgain() {   
  if (mouseX > 9.5 * w - 2 * w && mouseX < 9.5 * w + 2 * w) {
    if (mouseY > 11 * w - w && mouseY < 11 * w + w) {
      setupCurrentGrid();
      setupGrid();
      
      timer = 50;
      lives = 3;
      death = false;
      running = true;
    }
  }
}
