import ddf.minim.*;
import ddf.minim.*;
import ddf.minim.analysis.*;


Minim minim;
AudioPlayer groove;
BeatDetect beat;

float eRadius;

float boxRotation = 0;
 
void setup() {
  minim = new Minim(this);
  groove = minim.loadFile("ryoji-ikeda-the-transfinite.mp3", 2048);
  groove.loop();
  
  beat = new BeatDetect();
  
  //Set the size of the screen (this is not really necessary in Android mode, but we'll do it anyway)
  size(480, 800, P3D);
  
  //Turn on smoothing to make everything pretty.
  smooth();
  
  //Set the fill and stroke colour for the box and circle
  fill(255);
  stroke(255);
  
  //Tell the rectangles to draw from the center point (the default is the TL corner)
  rectMode(CENTER);
 
};
 
void draw() {

  
  //Set the background colour, which gets more red as we move our finger down the screen.
  background(groove.left.get(1) * (255.0/800), 100, 0);

  //Chane our box rotation depending on how our finger has moved right-to-left
  boxRotation += (float) (groove.left.get(1) * 100)/100;
 
  //Draw the ball-and-stick
  
  line(width/2, height/2, groove.right.get(1) * 100, height / 2);
  ellipse(groove.right.get(1) * 100, height / 2, 40, 40);
 
  //Draw the box
  pushMatrix();
    translate(width/2, height/2);
    rotate(boxRotation);
    rect(0,0, 150, 150);
  popMatrix();
};
