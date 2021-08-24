 var path, pathImage
 var runner, runner_running
 var invisiblePath, invisiblePath2

function preload(){
 runner_running = loadAnimation("Runner-1.png", "Runner-2.png"), 
 pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(600,400);
  path = createSprite(300, 200,30,3000)
  path.addImage("path", pathImage)
  path.velocityY=4
  path.scale= 1.9
  path.y = path.height/8
  runner = createSprite(300, 200, 20, 30)
  runner.addAnimation("running", runner_running)
  runner.scale=0.1
  invisiblePath = createSprite(10,300, 80, 3000)
  invisiblePath2 = createSprite(590, 300, 80, 3000)
  invisiblePath.visible = false
  invisiblePath2.visible = false
}

function draw() {
  background(0);
  drawSprites();
  if(path.y > 400){
  path.y = path.height/8
}

 runner.x=World.mouseX;
 runner.collide(invisiblePath)
 runner.collide(invisiblePath2)

}
