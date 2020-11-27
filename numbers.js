function showNumbers() {
  for (let i = 0; i < 10; i++) {    
    fill(50, 200, 255, 200);
    noStroke();
    rect(2.3 * w, w * (i+5), 4 * w, 0.9 * w, 10);
    fill(0);
    textSize(w / 1.2);
    textAlign(RIGHT, CENTER);
    for (let j = 0; j < Ynumbers[i].length; j ++) { 
      if(Ynumbers[i].length < 5){
        x = w * map(j, 0, 5, 4, 0);
      }else{
        x = w * map(j, 0, 5, 4, 1);
      }
      y = w * (i+5) + 5;
      
      text(Ynumbers[i][Ynumbers[i].length - j - 1], x, y);
    }
  }
  for (let i = 0; i < 10; i++) { 
    noStroke();
    fill(50, 200, 255, 200);
    rect(w * (i+5), 2.3 * w, 0.9 * w, 4 * w, 10);
    fill(0);
    textAlign(CENTER, CENTER);
    for (let j = 0; j < Xnumbers[i].length; j ++) { 
      if(Xnumbers[i].length < 5){
        y = w * map(j, 0, 4.5, 3.9, 0);
      }else{
        y = w * map(j, 0, 5.5, 3.9, 0);
      }
      x = w * (i+5);
      
      textSize(w / 1.2);
      
      if (Xnumbers[i][Xnumbers[i].length - j - 1] == 10) {
        textSize(w / 1.4);
      }
      text(Xnumbers[i][Xnumbers[i].length - j - 1], x, y);
    }
  }
}
