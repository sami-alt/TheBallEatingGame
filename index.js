/// <reference path="./node_modules/@types/p5/global.d.ts" />
function setup() {
  'use strict';


  angleMode(DEGREES);
  createCanvas(500, 500); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(30);

  background(255, 255, 255);
 
 

    var BallXpos = []
    for ( var i = 0; i < 9; i++){
        BallXpos.push(i * 70);
    };


    window.draw = function() {
        background(255,255,255);
        for ( var i = 0; i < BallXpos.length; i++){
           
            ellipse(BallXpos[i], 250, 50, 50);
            BallXpos[i] -=1;
            if (BallXpos[i] < -60){
                BallXpos[i] = width + 60;
            }
            if (mouseIsPressed && mouseX < BallXpos[i] + 95  && mouseX > BallXpos[i] + 45 && mouseY > 225 && mouseY < 275){
                fill(255,255,0);
            } else {
                fill(255,0,0);
            }
        }  
    }
}
