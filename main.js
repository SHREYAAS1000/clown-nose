function preload(){
clown_nose = loadImage("https://i.postimg.cc/rp6FXKgd/download.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses); // on(): used to start  execueting
}

function modelLoaded()
{
    console.log("poseNet is loaded");
}

function draw()
{
image(video,0,0,300,300);
// option 1 to draw clown nose by  creating the circle
//circle(noseX,noseY,20)
//fill(255,0,0);
//stroke(255,0,0);

//option 2 to draw clown nose by uploading an Image

image(clown_nose,noseX,noseY,30,30)
}

function take_snapshot()
{
    save("MyFilterImage.png");
}
noseX=0;
noseY=0;
function gotPoses(results)
{
     if(results.length > 0) // if condition is not used , then posenet will stop and app will not work
     {
         console.log(results);
         noseX= results[0].pose.nose.x;
         noseY= results[0].pose.nose.y;
         console.log("nose x ="+ noseX);
         console.log("nose y ="+ noseY);

     }
}

