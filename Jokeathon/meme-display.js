let img;
let theta = 0;

function setup() {
  createCanvas(710, 400, WEBGL);

  img = loadImage('buddy.jpg');
}

function draw() {
  background(0);
  translate(-220, 0, 0);
  
  //pass image as texture
  
  translate(440, 0, 0);
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(100, 100, 100);

  theta += 0.05;
}



