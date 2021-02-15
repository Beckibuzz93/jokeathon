let canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class ball {
	constructor() {
		this.x = random(windowWidth);
        this.y = random(windowHeight);
		
		this.xSpeed = random(-2, 2);
        this.ySpeed = random(-1, 1.5);
        
        this.r = random(1,8);
	}
	
	bounce () {
		if(this.x < 0 || this.x > width)
			this.xSpeed*=-1;

	  	if(this.y < 0 || this.y > height)
			this.ySpeed*=-1;

	 	this.x+=this.xSpeed;
	  	this.y+=this.ySpeed;
	}
	
	display() {
        ellipse(this.x, this.y, this.r);
        fill(60);
        noStroke();
	}

	joinParticles(bouncyBall) {
		bouncyBall.forEach(element => {
			let distance = dist(this.x, this.y, element.x, element.y);
			if(distance< 40) {
				stroke('rgba(255,255,255,0.04)');
				line(this.x, this.y, element.x, element.y);
			}
		});
	}
}

let bouncyBall = []; 
    
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
	for (i=0; i < windowWidth/5; i++) {
		bouncyBall[i] = new ball();
	}
  
}
        
function draw() {
    background('#0f0f0f');
	for (i=0; i < bouncyBall.length; i++) {
        bouncyBall[i].bounce();
		bouncyBall[i].display();
		bouncyBall[i].joinParticles(bouncyBall.slice(i));
        }
}