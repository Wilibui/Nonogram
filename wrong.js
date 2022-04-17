function wrong(x, y) {
  lives--;

  wrongSquare[1] = x;
  wrongSquare[2] = y;
  wrongA = 255;
}
function showWrong() {
  if(wrongA > 0){
    stroke(0, wrongA);
    strokeWeight(w / 10);
    fill(255, 0, 0, wrongA);
    square(wrongSquare[1], wrongSquare[2], 1 * w);
  }
  wrongA -= 3;
}
