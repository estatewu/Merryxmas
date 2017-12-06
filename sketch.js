var picture;
var gift;
//var bang;
var mic;
var vol;
var man;
var xmas = 0;
var merry = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  picture = loadImage("./assets/santa.png");
  gift = loadImage("./assets/gift.png");
  //bang = loadImage("./assets/bang.png");
  
  mic = new p5.AudioIn();
  mic.start();
  
  man = new santa();
}

function draw() {
  var vol = map(mic.getLevel(), 0, 0.2, 0, 255);
  background(255);
  
    fill(vol,vol,vol);
    textSize(height/15);
    textFont('Chalkduster');
    textAlign(CENTER);
    text("Merry Christmas!",0+random(0,mic.getLevel()*20),0+random(0,mic.getLevel()*20),width,height/9);
    man.display();
}

function santa(){
  this.mouth=function(){
        //stroke(0);
        fill('#d94d34');
        ellipse((width / 2) - (height * 0.8) / 3.3, (height / 1.37), vol * 30);
        image(gift,(width / 1.05) - (height * 0.8) / 3.3, (height / 1.5), ((height * 0.1) / 0.87), (height * 0.1));
        image(gift,(width / 2) - (height * 0.8) / 3.3, (height / 7), ((height * 0.1) / 0.87), (height * 0.1));
        image(gift,(width / 4) - (height * 0.8) / 3.3, (height / 1.5), ((height * 0.1) / 0.87), (height * 0.1));
        image(gift,(width / 4.5) - (height * 0.8) / 3.3, (height / 4.5), ((height * 0.1) / 0.87), (height * 0.1));
        image(gift,(width / 1.1) - (height * 0.8) / 3.3, (height / 5), ((height * 0.1) / 0.87), (height * 0.1));
    }
  this.normal=function(){
        merry=false;
    }
  this.display=function(){
        image(picture, (width / 2) - (height * 0.8) / 0.87 / 2, height - (height * 0.8), ((height * 0.8) / 0.87), (height * 0.8));
        //image(bang, mouseX, mouseY, 33, 60);
        vol = map(mic.getLevel(), 0, 0.5, 0, (height * 0.8) * 0.05);
        
        if(merry===false){
            if (vol < (height * 0.8) * 0.001 && xmas!==0){
                merry=true;
                setTimeout(this.merryxmas(),2000);
            }
            if (vol > (height * 0.8) * 0.001) {
                if(merry===false){
                    this.mouth();
                }
            }
            else{
                    this.normal();
            }
        }else{
            this.mouth();
        }
    }
    this.merryxmas=function(){
        merry=false;
    }
    xmas=vol;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}