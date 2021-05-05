//C-9 PROJECT BALOON BUSTER 
// BY RACHIT CHAKRABORTY




      //creating the sprites 

      var ground,groundImage;
      
      var bow,bowImage;

      var arrow,arrowImage;      

      var balloon1,balloonImage1;
      var balloon2,balloonImage1;
      var balloon3,balloonImage1;
      var balloon4,balloonImage1;
      var balloon5,balloonImage1;
      var balloon6,balloonImage1;

      var balloon7,balloonImage2;
      var balloon8,balloonImage2;
      var balloon9,balloonImage2;
      var balloon10,balloonImage2;
      var balloon11,balloonImage2;

      var balloon12,balloonImage3;
      var balloon13,balloonImage3;
      var balloon14,balloonImage3;
      var balloon15,balloonImage3;

      var balloon16,balloonImage4;
      var balloon17,balloonImage4;
      var balloon18,balloonImage4;






function preload()
{
      //loading the images 

      groundImage=loadImage("ground.jpg")
      
  
      balloonImage1=loadImage("blueballoon.png")
      
      balloonImage2=loadImage("pinkballoon.png")
  
      balloonImage3=loadImage("greenballoon.png")
  
      balloonImage4=loadImage("redballoon.png")  
  
      bowImage=loadImage("bow.png")
      
      arrowImage=loadImage("arrow.png")
}

function setup() 
{
 
  //creating canvas
  createCanvas(400, 400);
  
  
  
  //adding image and giving position
  
  ground = createSprite(1,200,20,50);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -0.6;
    
  
  bow = createSprite(380,190,20,50);
  bow.addImage("bow",bowImage);
  bow.scale = 1.2
  
  arrow = createSprite(380,210,20,50);
  arrow.addImage("arrow",arrowImage);
  arrow.scale = 0.5
  
  
        balloon1 = createSprite(50,100,20,50);
        balloon1.addImage("balloon1",balloonImage1);
        balloon1.scale = 0.08

        balloon2 = createSprite(50,40,20,50);
        balloon2.addImage("balloon1",balloonImage1);
        balloon2.scale = 0.08

        balloon3 = createSprite(50,160,20,50);
        balloon3.addImage("balloon1",balloonImage1);
        balloon3.scale = 0.08

        balloon4 = createSprite(50,220,20,50);
        balloon4.addImage("balloon1",balloonImage1);
        balloon4.scale = 0.08

        balloon5 = createSprite(50,280,20,50);
        balloon5.addImage("balloon1",balloonImage1);
        balloon5.scale = 0.08
  
        balloon6 = createSprite(50,340,20,50);
        balloon6.addImage("balloon1",balloonImage1);
        balloon6.scale = 0.08
  
  
  
  
        balloon7 = createSprite(100,70,20,50);
        balloon7.addImage("balloon1",balloonImage2);
        balloon7.scale = 0.9;

        balloon8 = createSprite(100,130,20,50);
        balloon8.addImage("balloon1",balloonImage2);
        balloon8.scale = 0.9;

        balloon9 = createSprite(100,190,20,50);
        balloon9.addImage("balloon1",balloonImage2);
        balloon9.scale = 0.9;

        balloon10 = createSprite(100,250,20,50);
        balloon10.addImage("balloon1",balloonImage2);
        balloon10.scale = 0.9;

        balloon11 = createSprite(100,310,20,50);
        balloon11.addImage("balloon1",balloonImage2);
        balloon11.scale = 0.9;

  
  
        balloon12=createSprite(150,100,30,50);
        balloon12.addImage("balloon1",balloonImage3);
        balloon12.scale = 0.07;

        balloon13 = createSprite(150,160,20,50);
        balloon13.addImage("balloon1",balloonImage3);
        balloon13.scale = 0.07;

        balloon14 = createSprite(150,220,20,50);
        balloon14.addImage("balloon1",balloonImage3);
        balloon14.scale = 0.07;

        balloon15 = createSprite(150,280,20,50);
        balloon15.addImage("balloon1",balloonImage3);
        balloon15.scale = 0.07;

  
  
         
        balloon16=createSprite(200,130,30,50);
        balloon16.addImage("balloon1",balloonImage4);
        balloon16.scale = 0.07;

        balloon17 = createSprite(200,190,20,50);
        balloon17.addImage("balloon1",balloonImage4);
        balloon17.scale = 0.07;

        balloon18 = createSprite(200,250,20,50);
        balloon18.addImage("balloon1",balloonImage4);
        balloon18.scale = 0.07;

  
}



function draw()  
{
  
    background(220);

    //drawing the sprites
    drawSprites();
  
  
 //making an endless background 
    if (ground.x < 100)     
{
  ground.x = ground.width / 2;
}
  

  //controling the arrow
  bow.y = mouseY;
  
  //giving y position to arrow
  arrow.y = bow.y;
  
  
}

//THANK YOU :) 
//HAVE A NICE DAY


