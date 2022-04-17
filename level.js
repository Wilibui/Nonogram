function setupLevel(prevL) {  
  l = round(random(Levels.length - 1));
  if(l == prevL){
    setupLevel(l);
  }
  level = Levels[l];
}
