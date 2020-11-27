function setupGrid() {
  for (let i = 0; i < 10; i++) {
    grid[i]=[];
    for (let j = 0; j < 10; j++) {
      x = w * (i+5);
      y = w * (j+5);
      grid[i][j] = new Grid(x, y, j, i);
    }
  }
}

function showGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      x = w * (i+5);
      y = w * (j+5);
      grid[i][j].x = x;
      grid[i][j].y = y;
      grid[i][j].show();
    }
  }
  strokeWeight(w / 7);
  noFill();
  line(w * 9.5, w * 4.5, w * 9.5, w * 14.5);
  line(w * 4.5, w * 9.5, w * 14.5, w * 9.5);
  square(w * 9.5, w * 9.5, w * 10);  
}

function checkGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j].clicked()) {
        print(i + " " + j);
      }
    }
  }
}

class Grid {
  constructor(x, y, i, j) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.j = j;
  }
  show() {    
    stroke(0);
    strokeWeight(w / 20);

    if (currentGrid[this.i][this.j] == 0) {      
      fill(255);
      square(this.x, this.y, w);
    }
    if (currentGrid[this.i][this.j] == 1) {
      fill(20, 0, 200);
      square(this.x, this.y, w);
    }
    if (currentGrid[this.i][this.j] == 2) {
      fill(255);
      square(this.x, this.y, w);
      stroke(20, 0, 200);
      line((this.j + 4.7) * w, (this.i + 4.7) * w, (this.j + 5.3) * w, (this.i + 5.3) * w);
      line((this.j + 5.3) * w, (this.i + 4.7) * w, (this.j + 4.7) * w, (this.i + 5.3) * w);
    }
  }
  clicked() {
    if (currentGrid[this.i][this.j] == 0) {
      if (mouseX > this.x - w/2 && mouseX < this.x + w/2) {
        if (mouseY > this.y - w/2 && mouseY < this.y + w/2) {
          if (level[this.i][this.j] == 1 && current == 1) {
            currentGrid[this.i][this.j] = 1;
          }
          if (level[this.i][this.j] == 1 && current == 2) {
            currentGrid[this.i][this.j] = 1;
            wrong(this.x, this.y);
          }
          if (level[this.i][this.j] == 2 && current == 1) {
            currentGrid[this.i][this.j] = 2;
            wrong(this.x, this.y);
          }       
          if (level[this.i][this.j] == 2 && current == 2) {
            currentGrid[this.i][this.j] = 2;
          }
        }
      }
    }
  }
}
