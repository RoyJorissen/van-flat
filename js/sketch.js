let r = 0;
let g = 0;
let b = 0;


function setup() {

  createCanvas(800,800);
}

function draw() {

  background(r, g, b);

  if(mouseX > width/2){
    b = b + 4;
    r = r - 4;
  } else {
    b = b -4;
    r = r +4;
  }

  if (r > 175) {
    r = 175;
  } else if (r < 0){
    r = 0;
    } 
  if (b > 175) {
    b = 175;
  } else if (b < 0){
    b = 0;
    } 

  fill("#7D80DA");
  noStroke();
  rect(125,350,450, 75 ); // frame

  fill("#B0A3D4");
  rect(125, 425, 100,50); // sub frame 1

  fill("#FBC2B5");
  rect(240, 435, 50,50); // wheel links

  fill(0);
  noStroke()
  rect(260, 455, 10,10); // wheel dop links

  fill("#B0A3D4");
  rect(310, 425, 100,50); // sub frame 2

  fill("#FBC2B5");
  rect(430, 435, 50,50); // wheel rechts

  fill(0);
  rect(450, 455, 10,10); // wheel dop rechts

  fill("#B0A3D4");
  rect(500, 425, 75,50); // sub frame 3

  fill("#FFD166");
  rect(575, 350, 25,40); // light front

  fill("#AFCBFF");
  rect(475, 200, 100,150); // window driver/ flat 1

  fill("#FFA8A9");
  rect(375, 150, 100, 200); // flat 2

  fill("#B0A3D4");
  rect(225, 125, 100, 225); // flat 4

  fill("#FFD166");
  rect(285, 250, 25,25); // light on behind the flat
  rect(285, 230, 25,25);
  rect(390, 315, 25, 25);

  fill(150);
  rect(390, 275, 25, 25); // light off behind the flat

  fill("#FBC2B5");
  rect(300, 250, 100, 100); //flat 3

  fill("#AFCBFF");
  rect(125, 225, 100,125); //flat 5

  fill("#FFA8A9");
  triangle(125, 225, 225, 150, 225, 225); // flat 5 dak

  fill ("#E3655B")
  rect(100,350, 25, 40); // rem light

  fill("#FFD166");

  rect(190, 250, 25,25); // lights on
  rect(140, 250, 25,25);
  rect(190, 300, 25,25);
  rect(240, 150, 25,25);
  rect(240, 250, 25,25);
  rect(390, 175, 25, 25);
  rect(435, 175, 25, 25);
  rect(435, 275, 25, 25);
  
  fill(150);
  rect(140, 300, 25,25); // lights off
  rect(285, 150, 25,25); 
  rect(285, 200, 25,25);
  rect(240, 200, 25,25);
  rect(240, 300, 25,25); 
  rect(325, 275, 50, 25);
  rect(390, 225, 25, 25);
  rect(435, 225, 25, 25);
  rect(435, 315, 25, 25);

  rect(525, 225, 50, 100);
  

  
  



}







// #FBC2B5 wheels
// #7D80DA frame
// #B0A3D4 sub frame
// #CEBACF windows
// #FFA8A9 buildings
