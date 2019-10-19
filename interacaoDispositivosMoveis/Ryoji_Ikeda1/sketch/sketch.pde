import ddf.minim.*;
import ddf.minim.*;
import ddf.minim.analysis.*;

Minim minim;
AudioPlayer player;
BeatDetect beat;

void setup(){
  size(640, 480);
  frameRate(60);

  minim = new Minim(this);
  player = minim.loadFile("ryoji-ikeda-the-transfinite.mp3", 1024);
  player.loop();
  beat = new BeatDetect();
}

void draw(){
  fill(255);

  beat.detect(player.mix);

  if (beat.isOnset())
  {
    float random_r = random(255);
    float random_g = random(255);
    float random_b = random(255);

   stroke(random_r, random_g, random_b);
   //background(255 - random_r, 255 - random_g, 255 - random_b);
  }
  else
  {
   stroke(255); 
   background(0);
  }

  for(int i = 0; i < player.bufferSize() - 1; i++)
  {
    if (player.left.get(i) > 0)
    {
       quad(0, i, 0, i, width / 2, i, width / 2, i); 
    }

    if (player.right.get(i) > 0)
    {
       quad(width / 2, i, width / 2, i, width, i, width, i); 
    }
  }
}
