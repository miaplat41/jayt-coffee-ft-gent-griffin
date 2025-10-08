var gtrain=40;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(52,107,19); //an RGB color for the canvas' background
  //circle
  stroke(253,255,54);
  fill(184,245,51,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,250,200,200);
  rect(mouseX,120,190,250);
}
