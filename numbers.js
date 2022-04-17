function setupNumbers() {
  Ynumbers = [[],[],[],[],[],[],[],[],[],[]];
  Xnumbers = [[],[],[],[],[],[],[],[],[],[]];

  let Ynums = 0; 
  for (let i = 0; i <10; i++) {    
    for (let j = 0; j <10; j++) {
      if (level[i][j] == 1) {
        Ynums++;
      } else if (level[i][j] == 2) {
        if (Ynums != 0) {         
          append(Ynumbers[i], Ynums);
          Ynums = 0;
        }
      }
    }
    if (Ynums != 0) {         
      append(Ynumbers[i], Ynums);
      Ynums = 0;
    }
  }

  let Xnums = 0; 
  for (let i = 0; i <10; i++) {    
    for (let j = 0; j <10; j++) {
      if (level[j][i] == 1) {
        Xnums++;
      } else if (level[j][i] == 2) {
        if (Xnums != 0) {         
          append(Xnumbers[i], Xnums);
          Xnums = 0;
        }
      }
    }
    if (Xnums != 0) {         
      append(Xnumbers[i], Xnums);
      Xnums = 0;
    }
  }
}

function showNumbers() {
  //Ynumbers
  for (let i = 0; i < 10; i++) {
    if (doneY(i)) {
      fill(0, 0, 255, 200);
    } else {
      fill(50, 200, 255, 200);
    }
    noStroke();
    rect(2.3 * w, w * (i+5), 4 * w, 0.9 * w, 10);
    fill(0);
    textSize(w / 1.2);
    textAlign(RIGHT, CENTER);
    for (let j = 0; j < Ynumbers[i].length; j ++) { 
      if (Ynumbers[i].length < 5) {
        x = w * map(j, 0, 5, 4, 0);
      } else {
        x = w * map(j, 0, 5, 4, 1);
      }
      y = w * (i+5) + 5;
      text(Ynumbers[i][Ynumbers[i].length - j - 1], x, y);
    }
  }
  
  //Xnumbers
  for (let i = 0; i < 10; i++) { 
    if (doneX(i)) {
      fill(0, 0, 255, 200);
    } else {
      fill(50, 200, 255, 200);
    }
    noStroke();
    rect(w * (i+5), 2.3 * w, 0.9 * w, 4 * w, 10);
    fill(0);
    textAlign(CENTER, CENTER);
    for (let j = 0; j < Xnumbers[i].length; j ++) { 
      if (Xnumbers[i].length < 5) {
        y = w * map(j, 0, 4.5, 3.9, 0);
      } else {
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

function doneY(i) {
  levelOnes = 0;
  currentOnes = 0;
  for (let j = 0; j < 10; j++) {
    if (level[i][j] == 1) {
      levelOnes++;
    }
    if (currentGrid[i][j] == 1) {
      currentOnes++;
    }
  }  
  if (levelOnes == currentOnes) {
    return true;
  }else{
    return false;
  }
}

function doneX(j) {
  levelOnes = 0;
  currentOnes = 0;
  for (let i = 0; i < 10; i++) {
    if (level[i][j] == 1) {
      levelOnes++;
    }
    if (currentGrid[i][j] == 1) {
      currentOnes++;
    }
  }  
  if (levelOnes == currentOnes) {
    return true;
  }else{
    return false;
  }
}
