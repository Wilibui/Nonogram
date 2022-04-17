function setupGrid() {
  for (let i = 0; i < 10; i++) {
    grid[i]=[];
    for (let j = 0; j < 10; j++) {
      grid[i][j] = new Grid(j, i);
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
  strokeWeight(w/7);
  noFill();
  line(w * 9.5, w * 4.5, w * 9.5, w * 14.5);
  line(w * 4.5, w * 9.5, w * 14.5, w * 9.5);
  square(w * 9.5, w * 9.5, w * 10);

}

function checkGrid(type) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid[i][j].clicked(type);
    }
  }
}

class Grid {
  constructor(i, j) {   
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
  
  clicked(type) {
    if (mouseX > this.x - w/2 && mouseX < this.x + w/2) {
      if (mouseY > this.y - w/2 && mouseY < this.y + w/2) {
        if (type == "p") {
          ci = this.i;
          cj = this.j;
          ij = "O";
          grid[this.j][this.i].changeGrid();
        } else if (type == "d") {
          if ((ci == this.i && (ij == "O" || ij == "i")) && cj != this.j) {
            ij = "i";
            grid[this.j][this.i].changeGrid();
          } else if ((cj == this.j && (ij == "O" || ij == "j")) && ci != this.i) {
            ij = "j";
            grid[this.j][this.i].changeGrid();
          }
        }
      }
    }
  }

  changeGrid() {
    if (currentGrid[this.i][this.j] == 0) {
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
    
    if(doneX(this.j)){
      for(let i = 0; i < 10; i++){
        currentGrid[i][this.j] = level[i][this.j];
      }
    }
    if(doneY(this.i)){
      for(let j = 0; j < 10; j++){
        currentGrid[this.i][j] = level[this.i][j];
      }
    }   
  }
}
