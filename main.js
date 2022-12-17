nosex=0;
nosey=0;

function preload()
{
clown_nose=loadImage("https://i.postimg.cc/MHCc1Lxh/clown-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialiszed');
}

function draw()
{
image(video, 0, 0, 300, 300);
image(clown_nose, nosex, nosey, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}