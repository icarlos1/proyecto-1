//canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d')
ctx.fillRect(0,0,512,512)
//globals
let interval=0

let images = {
  bg:  "images/pixilframe04.png",
  pig: "images/pixil-frame-0 (2).png",
  pigdie: "pixil.frame-0 (1).png",
  obstacle: "images/pixil-frame-0 (3).png",
  life: "images/pixil-frame-0 (6).png",
  gameOver: "images/pixil-frame-0 (5).png"
};
let coinScore = 0
let frames = 0 
let gameOn = false
let obstacle = []
let life = []
//clases


  class Board{
    constructor(){
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.image = new Image()
      this.image.src = images.bg
      this.draw = function(){
        if (this.x < -canvas.width) this.x = 0
        this.x -= 2
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    
      
  }

    this.image.onload = this.draw.bind(this);
}
  }

  
  class Pig {
    constructor(){
      this.x = 50
      this.y = 200
      this.velY=0
      this.width = 80
      this.height = 60
      this.image = new Image()
      this.image.src = images.pig
      this.image.onload = this.draw.bind(this)
    }
    draw() {
      if (this.y < canvas.height - this.height) {
        this.y += this.velY
      } else {
        gameOver()
      }
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    
      
  }


}

class pigdie {
  constructor()  {
    this.x = 30
    this.y = 10
    this.width =  50
    this.height = 40
    this.image = new Image()
    this.image.onload = this.draw.bind(this)
    this.image.src = images.pigdie
    draw() ;{
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
}


}
class Obstacle {
  constructor()  {
    this.x = 500
    this.y = 150
    this.width =  50
    this.height = 40
    this.image = new Image()
    this.image.onload = this.draw.bind(this)
    this.image.src = images.obstacle
  }
    draw(){
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
}


class Life {
  constructor()  {
    this.x = 300
    this.y = 200
    this.width =  50
    this.height = 40
    this.image = new Image()
    this.image.onload = this.draw.bind(this)
    this.image.src = images.life
  }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
}




       
let board=new Board()
let pig=new Pig()




function start(){
  interval=setInterval(update,1000/60)
  gameOn=true
  Obstacle=[]
  frames=0
}

function update(){
  frames ++
  board.draw()
 pig.draw()
}

function gameOver(){
  clearInterval(interval)
  gameOn=false
  music.pause()
  gameOverSound.play()
  let rip = new Image()
  rip.src = images.rip
  rip.onload = function draw() {ctx.drawImage(rip, 200, 80, 60, 60)}
  ctx.fillText("Your score: " + coinScore, 170,240)
  ctx.fillText("Space bar to start again", 140,280)


}

  

//aux functions







//listeners
addEventListener('keydown', e=> {
  switch (e.keyCode){
    case 32:
    if(!gameOn) start()
    if(pig.y > pig.height) pig.y -= 70
    break
    case 38:
    if(pig.y > pig.height) pig.y -= 70
    break
    case 40:
    if(pig.y > pig.height) pig.y -= 70
    break
  }
})
addEventListener('touchstart', e=> {
  if(!gameOn) start()
  if(pig.y > pig.height) pig.y -= 70
}) 
