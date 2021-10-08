noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
    
}

function modelLoaded()
{
    console.log("poseNet is initalized");
}

function draw()
{
    background("red");
    textSize(difference);
    fill('#FFE787');
    text('Vaibhav',50,400);
}


function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+"noseY= "+noseY);

rightwristX=results[0].pose.rightWrist.x;
leftwristX=results[0].pose.leftWrist.x;
difference=floor(leftwristX-rightwristX);  
console.log("rightwristX= "+rightwristX+"leftwristx= "+leftwristX+"difference= "+difference);
}
}