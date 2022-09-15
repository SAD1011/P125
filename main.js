leftWristx = 0;
rightwristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,550);
    canvas.position(560,115);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized!!');
}

function draw() {
    background('#FFA500');

    document.getElementById('font-size').innerHTML = "the font size of the font will be " + difference +"px";
    text('Hello!', 250, 275 );
    textSize(difference);    
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}