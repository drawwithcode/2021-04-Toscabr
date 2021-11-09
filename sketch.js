let myCheckbox;
let allCheck;
let iterator = 0;
let slider;
let count=100
let color = "beige"
let win = false
let text1 = " flies left to uncheck!"
var player = "Sound ON"


function preload(){
  img1 =loadImage("assets/fruit.png")
  //img2 =loadImage("assets/window.png")
  mySong = loadSound("assets/flies.mp3")
}


function setup() {

 

  createCanvas(windowWidth,windowHeight);
  background("white")


  
  button = createButton("sound: ON/OFF");
  
  
  

  

for(let i = 0; i<100; i++){
  myCheckbox = createCheckbox('', true);

   }
   myCheckbox.addClass('my-boxes');
 

   let checkSelection = selectAll ("input");
   console.log(checkSelection);
  
  allCheck = selectAll("input");
  console.log(allCheck)

  
  slider = createSlider(50, 1500, 10);
  
  slider.style('width', '700px');
  
  

  button1 = createButton('exit');
  button1.mousePressed(changeBG);
  button1.style('background-color', 'pink');
  button1.addClass('button');
  button.addClass('button');
    
  }

  
  function changeBG() {
    color = "lightBlue"
    text1 = "You opened the window! All the flies will now find their way out"
    count = ""
    win = true
    button1.hide()
  }


  function draw() {
  
    
    background("lightYellow")

    slider.position(windowWidth/2-350, 130);

    fill("black")
    textAlign(CENTER)
    textSize(32);
    text(count + text1, windowWidth/2, 100);
    
    fill(color)
    noStroke()
    rect(400,200,300, 300)
    image(img1,windowWidth/2-460,windowHeight-500,1000, 500);

    
    
    let val = slider.value();
    mapped = map(val, 0, 1400, 10, 1);
    mapped = round(mapped, 0)
    fill("black")
    textAlign(CENTER)
    textSize(32);
    textStyle(BOLD);
    textFont ("Courier New")
    text("difficulty: " + mapped + "/10", windowWidth/2, 200);
    
    
    speed = map(val, 0, width, 5, -1);
    mySong.rate(speed)

    iterator++;

      
    
    button1.position(noise((iterator+60)/300)*windowWidth, noise((iterator-60)/300)*windowHeight);

    allCheck.forEach((singleCheck, i) => {


  let x = noise((iterator+60*i)/val)*windowWidth
  let y = noise((iterator-60*i)/val)*windowHeight
  
  singleCheck.style("position: absolute")
  singleCheck.position(x,y)
  
  


  if(win == true && singleCheck.x>400 && singleCheck.x<700 && singleCheck.y>200 && singleCheck.y<500){
    singleCheck.checked(false)
    
     }

    singleCheck.changed(changeFill);

    function changeFill() {
      if (singleCheck.checked()) {
        console.log("no")
        count+=1
      } else {
        console.log("yes")
        count-=1
      }
    }
 
    
    
    });

   
   
  
 button.mousePressed(soundOn);

 button.position(windowWidth/2-70, 10);
  button.size(140, 40);
  
  function soundOn() {
    if (mySong.isPlaying() == false) {
     // mySong.play();
      mySong.loop();
    }
   else {
    mySong.stop();
 
  }
  }
  }



  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  