class BlendingShapes {

  float posz, scale;

  float transparancy, xspeed, brightness;

  BlendingShapes(float tempScale) {
    posz = -300;
    scale = tempScale;

    transparancy = 100;
    brightness = 10;
  }

  void set() {
    scene.colorMode(HSB, 84, 14, 41);
    scene.noStroke();
    scene.background(0);
    scene.blendMode(ADD);
  }

  // Position, size, move
  void move() {
    scene.translate(sceneSize/2, sceneSize/2, posz);
    scene.scale(scale);
    int rot = frameCount;
    scene.rotateZ(radians(250));
    scene.rotateX(radians(rot/300.0f * 600));
    scene.rotateY(radians(rot/200.0f * 600));
  }

  void display() { 
    for (int i = 0; i < 100; i++) {
      scene.fill(map(i % 10, 0, 10, 0, 100), 300, 500, transparancy);
      scene.beginShape(TRIANGLE_STRIP);
      scene.vertex(200, 100, 100);
      scene.vertex(100, 200, 50);
      scene.vertex(100, 100, 20);
      scene.vertex(100, 100, 20);
      scene.endShape();

      scene.rotateY(radians(500.0f/100));
    }
  }
}
