function wrong(x, y) {
  lives--;

  wrongSquare[1] = x;
  wrongSquare[2] = y;
  wrongA = 255;
}
function showWrong() {
  stroke(0, wrongA);
  strokeWeight(w / 20);
  fill(255, 0, 0, wrongA);
  square(wrongSquare[1], wrongSquare[2], 1 * w);
  wrongA -= 3;
}
