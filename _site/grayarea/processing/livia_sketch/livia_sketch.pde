int childCount;
PShape livia;
PShape[] children;

void setup() {
  size(1000, 1000, P3D);
  colorMode(HSB, 359, 99, 99);
  livia = loadShape("livia.obj");
  children = livia.getChildren();
  childCount = children.length;
  println("childCount", childCount);
}

void draw() {
  background(0);
  lights();
  camera(0, 0, height * 1.2,
    0, 0, 0,
    0, -1, 0);
    translate(-40, -70, 1080);
    
  for (int i = 0; i < childCount; ++i) {
    float n = i / float(childCount);
    children[i].translate(
      random(-1, 1) * n,
      random(-1, 1) * n,
      random(-1, 1) * n);
      shape(children[i]);
    
  }
}
