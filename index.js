/// <reference path="./node_modules/@types/p5/global.d.ts" />
function setup() {


  angleMode(DEGREES);
  createCanvas(400, 400); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(30);

  background(255, 255, 255);
 
 
 

 stroke(0);

 for (var i = 0; i < 2 ; i++){
   var X = 133 +(i*133);
   line(X, 0, X, 400);
   for(var j = 0; j < 2; j++){
     var Y = 133+(j*133);
     line(0,Y , 400, Y);
   }
 }

 var k = 0;
 
  mouseClicked = function() {
    
    if(k % 2) {
      fill(255,0,0);
      textSize(100);
      text("0", mouseX - 35, mouseY + 35 );
    } else {
      fill(0,0,0);
      textSize(100);
      text("X", mouseX - 35, mouseY + 35);
    }
    k += 1;
  }





}