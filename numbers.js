function showNumbers() {
  for (let i = 0; i < 10; i++) {    
    strokeWeight(w / 10);
    stroke(0);
    fill(100, 50);
    rect(2.5 * w, w * (i+5), 4 * w, 1 * w);
    fill(0);
    noStroke();
    textSize(w / 1.2);
    textAlign(RIGHT, CENTER);
    for (let j = 0; j < Ynumbers[i].length; j ++) { 
      x = w * map(j, 0, 5, 4, 1);
      y = w * (i+5) + 5;
      text(Ynumbers[i][Ynumbers[i].length - j - 1], x, y);
    }
  }
  for (let i = 0; i < 10; i++) {    
    strokeWeight(w / 10);
    stroke(0);
    fill(100, 50);
    rect(w * (i+5), 2.5 * w, 1 * w, 4 * w);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    for (let j = 0; j < Xnumbers[i].length; j ++) { 
      y = w * map(j, 0, 5, 4, 0.2);
      x = w * (i+5) + 0;
      textSize(w / 1.2);
      if (Xnumbers[i][Xnumbers[i].length - j - 1] == 10) {
        textSize(w / 1.4);
      }
      text(Xnumbers[i][Xnumbers[i].length - j - 1], x, y);
    }
  }
}
