var canvas;
var isTimerEnabled;
var startDate;
var endDate;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvasInit();
}

function draw() {
    background(0);
    updateTimer();
    drawTimer();
}

function keyPressed() {
    if(keyCode == 32 || keyCode == 13) { // spacebar or enter
        startDate = new Date();
        isTimerEnabled = true;
    } else if (keyCode == 27) { // escape
        isTimerEnabled = false;
    }
    else if (keyCode == 84) { // 't'
        alarm.play();
    }
    return 0;
}

function canvasInit()
{
    timerCounter = 0;
    isTimerEnabled = false;

    startDate = new Date();

    alarm = loadSound("/assets/alarm.mp3");
}

function updateTimer()
{
    endDate   = new Date();
    totalseconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
    s = Math.floor(totalseconds%60);
    m = Math.floor((totalseconds/60)%60);
    h = Math.floor(totalseconds/3600);
}

function drawTimer()
{
    if (isTimerEnabled) {
        if (h > 0) {
            timerText = h.toString();
        }
        else {
            timerText = "";
        }
        timerText += m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');
    }
    else {
        timerText = "---";
    }

    fill(255);
    //ellipse(width/2,height/2,50,50);
    textSize(width/4);
    textAlign(CENTER, CENTER);
    text(timerText, width/2, height/2);
}