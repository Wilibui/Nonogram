function setupCurrentGrid() {
  currentGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}
function showCurrent() {
  fill(50, 200, 255, 200);
  noStroke();
  rect(8 * w, 16.5 * w, 4 * w, 2 * w, 255);
  fill(50, 255, 50, 200);
  
  if (current == 1) {
    circle(7 * w, 16.5 * w, 2.25 * w);
  } else {
    circle(9 * w, 16.5 * w, 2.25 * w);
  }
  
  fill(20, 0, 200);
  stroke(20, 0, 200);
  strokeWeight(0.2 * w);
  square(7 * w, 16.5 * w, 1 * w, 10);  
  line(8.5 * w, 16 * w, 9.5 * w, 17 * w);
  line(8.5 * w, 17 * w, 9.5 * w, 16 * w);
}
function checkCurrent() {
  if (mouseX > 8 * w  - 2 * w && mouseX < 8 * w + 2 *  w) {
    if (mouseY > 16.5 * w  - w && mouseY < 16.5 * w + w) {
      if (current == 1) {
        current = 2;
      } else {
        current = 1;
      }
    }
  }
}
