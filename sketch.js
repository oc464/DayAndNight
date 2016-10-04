var x = 50;
var y = 50;
var speed = 1;
var value = 0
var b;
var c;
var d;
var e;

function setup() {
  createCanvas(600,350)
  b = color(0,0,75);
  c = color(50,0,0);
  d = color(200);
  e = color(0,50,0);
}

function draw() {
	background(b);
	stroke(0);
	
	fill(c);
	rect(250,200,200,150);
 
  fill(e);
  triangle(200,200,350,150,500,200);
  
	if(y >= height-25){
		speed = speed * -1;
		b = color(100,100,255);
		c = color(0,150,0);
		d = color(255,255,0);
		e = color(150,0,0);
	}
  
	if(y <= 25){
		speed = speed * -1;
		b = color(0,0,75);
  	c = color(50,0,0);
  	d = color(200);
  	e = color(0,50,0);
	}
  
  y = y + speed;
  
 	fill(d);
  ellipse(x,y,60,60);
  
}

function keyTyped(){
	if (key === 'f' ){
	speed = 10
	}
	if (key === 's' ){
	speed = 2
	}
}
  
//	if (mouseIsPressed) {
//		b = color(100,100,255);
//		c = color(0,150,0);
//		d = color(255,255,0);
//		e = color(150,0,0);
//	}
//	else {
//		b = color(0,0,75);
//  	c = color(50,0,0);
//  	d = color(200);
//  	e = color(0,50,0);
//	}