class VideoCreate {
  
  VideoCreate() {
    
  }
  
  void videoOlogra() {
    //Scenes Translate and Rotate
    //TOP
    translate(width/2-sceneSize/2, 0);
    pushMatrix();
    image(scene, 0, 0);
    popMatrix();
    
    //RIGHT
    translate((sceneSize*2)-1,(height/2)-(sceneSize/2)-1);
    pushMatrix();
    rotate(PI/2);
    image(scene, 0, 0);
    popMatrix();
    
    //DOWN
    translate(-sceneSize+1,(sceneSize*2)-1);
    pushMatrix();
    rotate(PI);
    image(scene, 0, 0);
    popMatrix();
    
    //LEFT
    translate((-sceneSize*2)+1,-sceneSize+1);
    pushMatrix();
    rotate(3*PI/2);
    image(scene, 0, 0);
    popMatrix();
  }
}
