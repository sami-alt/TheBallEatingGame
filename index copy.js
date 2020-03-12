/// <reference path="./node_modules/@types/p5/global.d.ts" />

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(30);
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Fish = function(){
  var Xpos = random(-10, 200);
  var Ypos = random(50, 350);
  var bodyLenght = 120;
  var bodyHeight = bodyLenght/2;
  var tailWidth = bodyLenght/2;
  var tailheight = bodyHeight/2;
  var bodyColor = color(189, 187, 194);

  return function() {
      noStroke();
      //body
      fill(bodyColor);
      ellipse(Xpos, Ypos, bodyLenght, bodyHeight);
      //tail

      triangle(Xpos - bodyLenght/2, Ypos,
      Xpos - bodyLenght/2 - tailWidth, Ypos - tailheight,
      Xpos -bodyLenght/2 - tailWidth, Ypos + tailheight);
      //eye
      fill(0, 0, 0);
      ellipse(Xpos+bodyLenght/2.5, Ypos - 5 , bodyLenght/12, bodyLenght/12);
      
      Xpos += 1;
  };
};

debugger;

var drawFish1 = Fish();
var drawFish2 = Fish();

draw = function() {
  background(110, 250, 231);
  drawFish1();
  drawFish2();
};



