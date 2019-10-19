PGraphics scene;

BlendingShapes shape = new BlendingShapes(1.18);
VideoCreate videoQuad = new VideoCreate();

int sceneSize;

void setup() {
  fullScreen(P3D);
  //size(760,760,P3D);
  background(0);
  frameRate(60);

  sceneSize = height/3;
  scene = createGraphics(sceneSize, sceneSize, P3D);
}

void draw() {

  // beginDraw
  scene.beginDraw();
    shape.set();
    shape.move();
    shape.display();
  scene.endDraw();

  //Create a Holographic video in four clock face
  videoQuad.videoOlogra();
}
