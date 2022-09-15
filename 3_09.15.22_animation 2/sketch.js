//initial positions
var ypos = 0;
var xpos = 0;

//speed
var yspeed = 1;
var xspeed = 1;

function setup() {
  createCanvas(200, 200);
  // frameRate(24); //frame rate is 1 per second, default is 60
}

function draw() {
  background (0);
  ellipse (xpos, ypos, 50);

  ypos = ypos + yspeed;
  xpos = xpos + xspeed;


  if (ypos >= height || ypos < 0) {
    yspeed = yspeed * -1;
  }

  if (xpos >= width || xpos < 0){ //keep inside of frame
    xspeed = xspeed * -1;
}

console.log(yspeed);
console.log(xspeed);
}
