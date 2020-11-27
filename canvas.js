function setupCanvas() {
  if (0.8 * windowHeight < windowWidth) {
    createCanvas(windowWidth, windowHeight);
    w = height / 19;
  } else {
    createCanvas(windowWidth, windowHeight);
    w = 0.8 * height / map(windowWidth/windowHeight, 0.8, 0.5, 15, 24);
  }
}
