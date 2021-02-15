function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
let canvas;
let snowflakes = []; 

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    fill(60);
    noStroke();
}

function draw() {
background('#0f0f0f');
  let t = frameCount / 60; 

  for (let i = 0; i < random(3); i++) {
    snowflakes.push(new snowflake()); 
  }

  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}

function snowflake() {
  this.posX = 0;
  this.posY = random(-10, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

 
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.1; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.3);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
