"use strict";

//This how you used to code a bouncing ball
//Now rewrite this sketch so it uses vectors.

const w = 800;
const h = 800;
let loc, speed;

function setup() {
  createCanvas(w, h);
  background(200);
  loc = createVector(w/2,h/2);
  speed = createVector(5,3);
}

function draw() {
    background(200);

    //Update
    edges();
    loc.add(speed);

    //Draw
    stroke(0);
    fill(175);
    circle(loc.x,loc.y,50);
}

function edges() {
    if ((loc.x > w) || (loc.x < 0)) {
        speed.x = speed.x * -1;
      }
      if ((loc.y > h) || (loc.y < 0)) {
        speed.y = speed.y * -1;
      }
    
}