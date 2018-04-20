var city
var garbage
var speed = 5 
var x = 25
var truck
var car
function preload() {
  city = loadImage ("assets/NYC.jpg ")
  garbage = loadImage ("assets/garbage.png")
  font = loadFont ("assets/Glametrix.otf")
 truck = loadSound ("assets/hello.mp3") 
 car = loadSound ("assets/car.mp3")
  
}
function setup () {
  createCanvas(900,600);
  imageMode(CENTER)
  //truck.loop()
}


function draw() {
  textFont(font)
  background(255);
  image(city,width/2,height/2)
  image(garbage,mouseX,mouseY)
  textSize(80)
  fill(255)
  text("Help Stop",x , 200)
  text("Pollution in NYC",x , 300);
  text("www1.nyc.gov", 30, 40 )  

 if (x > 500){
 speed = -5;
  }
  
  if (x < 0){
  speed = 5;
  }
  x = x + speed
}

function keyPressed () {
  if (keyCode == 32) {
    truck.play();
  }
  if (keyCode == 83) {
    car.play();
  }
  
  
}