function preload(){

}
function setup(){
    var canvas=createCanvas(640, 480);
    canvas.position(110, 250);

     video=createCapture(VIDEO);
     video.hide();
}
function draw(){
    image(video,0,0,640,480);
    fill(100, 30, 125);
    stroke(125, 100, 30);
    rect(-10, -10, 100, 100, 20);
    rect(550, -10, 100, 100, 20);
    rect(550, 390,100, 100, 20);
    rect(-10, 390, 100, 100, 20);
}



function take_snapshot(){
    save('kevin.png');
}