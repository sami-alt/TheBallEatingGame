/// <reference path="./node_modules/@types/p5/global.d.ts" />
function setup() {
    'use strict';


    angleMode(DEGREES);
    createCanvas(500, 500); // Size must be the first statement
    stroke(255); // Set line drawing color to white
    frameRate(30);

    background(255, 255, 255);

    var currentScene;

    var PlayerScore = 0;

    var drawScore = function () {
        var s;
        fill(0, 0, 0);
        s = "Score " + PlayerScore + "/25";
        textSize(25);
        text(s, 50, 25, 180);

    }
    //Pelaaja pallo  piirto ja liikkeet
    var Player = function (x, y) {
        this.x = x;
        this.y = y;
        this.LittleBalls = 0;
    }

    Player.prototype.draw = function () {
        fill(255, 0, 255);
        this.y = constrain(this.y, 25, 475);
        ellipse(this.x, this.y, 50, 50);
    }

    Player.prototype.up = function () {
        this.y -= 7;
    }

    Player.prototype.down = function () {
        this.y += 7;
    }

    var player = new Player(100, 250);

    //Syötävät pallot piirto ja lista
    var LittleBall = function (x, y, Size) {
        this.x = x;
        this.y = y;
        this.deleted = false;
    }

    LittleBall.prototype.draw = function () {
        fill(255, 255, 102);
        ellipse(this.x, this.y, 25, 25);

    }
    //Lista
    var LittleBalls = [];
    for (var i = 0; i < 5; i++) {
        LittleBalls.push(new LittleBall(i * 150 + 525, random(50, 450)));

    }

    //Pikku pallojen syösmis mekanismi
    Player.prototype.ballGrab = function (LittleBall) {
        if ((LittleBall.x >= this.x - 25 && LittleBall.x <= (this.x + 25)) && (
            (LittleBall.y >= this.y - 25 && LittleBall.y <= this.y + 25))) {
            PlayerScore++;
            LittleBall.deleted = true;
        }
    }


    var areAllBallsGone = function() {
        return LittleBalls.every(function(ball) {
            return ball.deleted || ball.x < 0;
        })
    }


    var drawScene1 = function () {
        currentScene = 1;
        background(0, 255, 204);
        textSize(35);
        text("The Ball Eating Game", 70, 200);
        textSize(20);
        text("Hit spacebar to move up", 130, 250);
        text("Eat small balls with the big ball", 110, 300);
        fill(255, 0, 0);
        rect(175, 350, 150, 60);
        fill(0, 0, 0);
        textSize(25);
        text("PLAY", 220, 390);
    }

    var drawScene2 = function () {
        currentScene = 2;
        background(102, 255, 255);
        for (var i = 0; i < LittleBalls.length; i++) {
            if (LittleBalls[i].deleted) {
                continue;
            }
            LittleBalls[i].draw();
            player.ballGrab(LittleBalls[i]);
            LittleBalls[i].x -= 3;
        }
        
        if (keyIsPressed && keyCode === 32) {
            player.up();
        } else {
            player.down();
        }
        player.draw();
        drawScore();

        if (areAllBallsGone()) {
            currentScene = 3;
        }
    }

    var drawScene3 = function(){
        currentScene = 3;
        
        if (PlayerScore === 5) {
            background(255,255,0);
            textSize(50);
            text("YOUR WINER", 80, 250);
        } if (PlayerScore < 5){
            background(255,0,102);
            textSize(50);
            text("YOUR LOOSER", 80, 250);
        }
    }

    window.draw = function () {
        if (currentScene === 1) {
            if (mouseIsPressed && mouseX > 175 && mouseX < 325 && mouseY > 350 && mouseY < 450) {
                drawScene2();
            } 
        } else if (currentScene === 2) {
            drawScene2();
        } else if (currentScene ===3){
            drawScene3();
        }
    }


    drawScene1();
}

