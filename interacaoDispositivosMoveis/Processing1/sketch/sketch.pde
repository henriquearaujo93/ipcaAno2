import ddf.minim.*;
import ddf.minim.*;
import ddf.minim.analysis.*;


Minim minim;
AudioPlayer groove;
BeatDetect beat;

float eRadius;

void setup() {
  size(800, 600, P3D);
  
  minim = new Minim(this);
  groove = minim.loadFile("groove.mp3", 2048);
  groove.loop();
  
  beat = new BeatDetect();
  
  ellipseMode(RADIUS);
  eRadius = 20;
}

void draw() {
  background(0);
  
  stroke(255);
  
  beat.detect(groove.mix);
  
  //Beat ball
  float a = map(eRadius, 20, 80, 60, 255);
  fill(255, 255, 255, a);
  if ( beat.isOnset() ) eRadius = 80;
  ellipse(width/7, height/2, eRadius, eRadius);
  ellipse(width - (width/7), height/2, eRadius, eRadius);
  eRadius *= 0.95;
  if ( eRadius < 20 ) eRadius = 20;
  
  
  for (int i = 0; i < groove.bufferSize() - 1; i++)
  {
    //ellipse(mouseX, mouseY, 30, 30); 
    ellipse(400 + groove.left.get(i)*50, 300 + groove.right.get(i)*100, 100, 100);
    line(i + groove.left.get(i)*50, 10 + groove.right.get(i)*100, i, 0);
    line(i + groove.left.get(i)*50, 600 - 10 + groove.right.get(i)*200, i, 600);
  } 
  
  
}

void keyPressed()
{
  if ( groove.isPlaying() )
  {
    groove.pause();
  }
  else
  {
    // simply call loop again to resume playing from where it was paused
    groove.loop();
  }
}
