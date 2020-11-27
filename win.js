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
    win();
  }
}
function win() {
  running = false;
  
  noStroke();
  fill(0, 255, 0, 200);
  rect(9.5 * w, 9.5 * w, 9 * w, 5.5 * w, 50);  
  //rect(9.5 * w, 11 * w , 4 * w, 2 * w,50);
  
  textSize(2.5 * w);
  fill(0);
  text("DONE", 9.5 * w, 8.5 * w);
  //textSize(1.2 * w);
  //text("NEXT",9.5 * w, 11.1 * w);
}
