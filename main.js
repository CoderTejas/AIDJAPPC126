song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("x coordinate of left wrist" + leftWristX + "y coordinate of left wrist" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        console.log("x coordinate of right wrist" + rightWristX + "y coordinate of right wrist" + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}