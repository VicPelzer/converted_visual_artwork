let kleur = 0;
let draai = 0;
var windowColor;
let windowColorDark;

function setup() {
  createCanvas(1280,720 );
  background(0);
  noStroke();

  windowColorDark = color("lightblue"); 
  // put setup code here

}

function draw() {
  // put drawing code here

  kleur = map (mouseX,0,500,0,255);
  print (kleur);
  background(kleur,0,0,255);
 
//linksboven
var windowColor = color("grey");
  push()
  fill(255);
  translate(100,0);
  rotate(PI / 4.0);
  rect(-60,-350, 400,400);
  pop()

//midden
  push()
  fill(255);
  translate(100,0);
  rotate(PI / 4.0);
  rect(440,-350, 400,400);
  pop()

//linksond
  push()
  let draai = map(mouseX,50,width,-3,2);
  rotate(PI / 4.0);
  fill(255);
  rect(550,125,400,400);

  pop()


  //rechts
  push()
  fill(255);
  translate(825,0);
  rotate(PI / 4.0);
  rect(440,-350, 400,400);
  pop()

//links
  push()
  fill(255);
  translate(100,0);;
  rotate(PI / 4.0);
  rect(-60,160,400);
  pop()
  
  //rechtsonder
  push()
  fill(255);
  translate(100,0);;
  rotate(PI / 4.0);
  rect(950,-350,400);
  pop()

  //rechtsboven
  push()
  fill(255);
  translate(100,0);;
  rotate(PI / 4.0);
  rect(450,-850,400);
  pop()

}

function mousePressed(){
  windowColorDark = color("black")
}