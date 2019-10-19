import ddf.minim.*;
import ddf.minim.analysis.*;
 
Minim minim;
AudioPlayer player;
AudioMetaData meta;
BeatDetect beat;
int  r = 100;
float rad = 50;
void setup()
{
  //size(displayWidth, displayHeight);
  size(375, 667);
  minim = new Minim(this);
  player = minim.loadFile("groove.mp3");
  meta = player.getMetaData();
  beat = new BeatDetect();
  player.loop();
  //player.play();
  background(-1);
  noCursor();
}
 
void draw()
{ 
  float t = map(mouseX, 0, width, 0, 1);
  beat.detect(player.mix);
  fill(#1A1F18, 20);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  fill(152, 28, 158);
  fill(127, 21, 153);
  if (beat.isOnset()) rad = rad*0.9;
  else rad = 70;
  ellipse(0, 0, 2*rad, 2*rad);
  stroke(-1, 50);
  int bsize = player.bufferSize();
  for (int i = 0; i < bsize - 1; i+=5)
  {
    float x = (r)*cos(i*10*PI/bsize);
    float y = (r)*sin(i*10*PI/bsize);
    float x2 = (r + player.left.get(i)*200)*cos(i*7*PI/bsize);
    float y2 = (r + player.left.get(i)*200)*sin(i*7*PI/bsize);
    line(x, y, x2, y2);
  }
  beginShape();
  noFill();
  stroke(-1, 50);
  for (int i = 0; i < bsize; i+=30)
  {
    float x2 = (r + player.left.get(i)*100)*cos(i*5*PI/bsize);
    float y2 = (r + player.left.get(i)*100)*sin(i*5*PI/bsize);
    vertex(x2, y2);
    pushStyle();
    stroke(-1);
    strokeWeight(2);
    point(x2, y2);
    popStyle();
  }
  endShape();
   if (flag) showMeta();
}
 
 
void showMeta() {
  int time =  meta.length();
  textSize(50);
  textAlign(CENTER);
  text( (int)(time/1000-millis()/1000)/60 + ":"+ (time/1000-millis()/1000)%60, -7, 21);
}
 
boolean flag =false;
void mousePressed() {
  if (dist(mouseX, mouseY, width/2, height/2)<150) flag =!flag;
}
 

 
void keyPressed() {
  if(key=='e')exit();
  if(key=='s')saveFrame("/image/print.jpeg");
}
