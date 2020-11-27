function showLives() {
  fill(0);
  
  if(lives == 3){
    fill(255, 0, 0);  
    circle(3.5 * w, 2.5 * w, w);
    circle(2.3 * w, 2.5 * w, w);
    circle(1.1 * w, 2.5 * w, w);
  }
  else if(lives == 2){
    circle(3.5 * w, 2.5 * w, w);
    fill(255, 0, 0);   
    circle(2.3 * w, 2.5 * w, w);  
    circle(1.1 * w, 2.5 * w, w);
  }
  else if(lives == 1){
    circle(3.5 * w, 2.5 * w, w);   
    circle(2.3 * w, 2.5 * w, w); 
    fill(255, 0, 0); 
    circle(1.1 * w, 2.5 * w, w);
  }else if(lives == 0){
    circle(3.5 * w, 2.5 * w, w);   
    circle(2.3 * w, 2.5 * w, w); 
    circle(1.1 * w, 2.5 * w, w);
  }
  
  if(lives == 0){
    death = true;
  }
}
