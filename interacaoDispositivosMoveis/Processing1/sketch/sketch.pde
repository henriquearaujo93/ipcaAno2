import ddf.minim.*;

Minim minim;
AudioPlayer groove;

void setup() {
  size(800, 600, P3D);
  
  minim = new Minim(this);
  groove = minim.loadFile("groove.mp3", 2048);
  groove.loop();
}

void draw() {
  background(0);
  
  stroke(255);
  
  for (int i = 0; i < groove.bufferSize() - 1; i++)
  {
    //ellipse(mouseX, mouseY, 30, 30);
    ellipse(400 + groove.left.get(i)*200, 300 + groove.right.get(i)*200, 100, 100);
    line(i + groove.left.get(i)*50, 10 + groove.right.get(i)*200, i, 0);
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
