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
  fill(100);
  rect(9.5 * w, 16 * w, 2 * w, w, 50);
  fill(0);
  if (current == 1) {
    square(9 * w, 16 * w, w, 50);
  } else {
    square(10 * w, 16 * w, w, 50);
  }
  fill(20, 0, 200);
  square(9 * w, 16 * w, 0.5 * w);
  stroke(20, 0, 200);
  line(9.8 * w, 15.8 * w, 10.2 * w, 16.2 * w);
  line(10.2 * w, 15.8 * w, 9.8 * w, 16.2 * w);
}
function checkCurrent() {
  if (mouseX > 10 * w  - w && mouseX < 10 * w + w) {
    if (mouseY > 16 * w  - w / 2 && mouseY < 16 * w + w / 2) {
      if (current == 1) {
        current = 2;
      } else {
        current = 1;
      }
    }
  }
}
