let xMax = 400; 
let yMax = 600; 
 
let xFantasma = xMax/2; 
let yFantasma = yMax*0.5; 
 
function setup() { 
  createCanvas(xMax, yMax); 
  frameRate(30); 
} 
 
function draw() { 
  background("#190123"); 
 
  push(); 
  noStroke(); 
 
  for (let i=0; i < 120; i++){ 
    let starX = (i*37) % width + (i%3)*5; 
    let starY = ((i*73) % height) + (i%7); 
 
    let randomTransparency = random(150,255); 
    let randomSize = random(2.8, 5.8); 
 
    if(i%2==0) { 
      fill(255, 255, 150, randomTransparency); 
      ellipse(starX, starY, randomSize); 
    } else if(i%3==0) { 
      fill(255, 100, 255, randomTransparency); 
      ellipse(starX, starY, randomSize); 
    } else { 
      fill(100, 255, 255, randomTransparency); 
      ellipse(starX, starY, randomSize); 
    } 
  } 
 
  pop(); 
 
  yFantasma = yMax*0.5 + sin(frameCount*0.05)*15; 
 
  push(); 
  noStroke(); 
 
  fill(240, 240, 255); 
  ellipse(xFantasma-75, yFantasma+5, 35, 25); 
 
  ellipse(xFantasma+75, yFantasma+5, 35, 25); 
 
  fill(240, 240, 255); 
  ellipse(xFantasma, yFantasma, 140, 150); 
  ellipse(xFantasma, yFantasma+45, 140, 60); 
 
  fill("#190123"); 
  ellipse(xFantasma-27, yFantasma-12, 16, 23); 
  ellipse(xFantasma+27, yFantasma-12, 16, 23); 
 
  ellipse(xFantasma, yFantasma+18, 15, 18); 
 
  fill(255, 150, 180); 
  ellipse(xFantasma-40, yFantasma+12, 16, 9); 
  ellipse(xFantasma+40, yFantasma+12, 16, 9); 
 
  pop(); 
}
