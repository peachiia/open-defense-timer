var canvas;
var isTimerEnabled;
var isRunning;
var counter;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvasInit();
}

function draw() {
    background(0);
    updateTimer();
    drawTimer();
    taskAlarm();
}

function keyPressed() {
    if(keyCode == 32 || keyCode == 13) { // spacebar or enter
        isTimerEnabled = true;
        isRunning = !isRunning;
    } 
    else if (keyCode == 27) { // escape
        counter = 0;
        isTimerEnabled = false;
        isRunning = false;
    }
    else if (keyCode == 84) { // 't'
        alarm.play();
    }
    return 0;
}

function canvasInit()
{
    counter = 0;
    isTimerEnabled = false;
    isRunning = false;

    alarm = loadSound("/assets/alarm.mp3");

    setInterval(clockTick, 1000);
}

function updateTimer()
{
    totalseconds = counter;
    s = Math.floor(totalseconds%60);
    m = Math.floor((totalseconds/60)%60);
    h = Math.floor(totalseconds/3600);
}

function clockTick()
{
    if (isRunning) {
        counter++;
    }
}

function drawTimer()
{
    if (isTimerEnabled) {
        if (h > 0) {
            timerText = h.toString() + ":";
        }
        else {
            timerText = "";
        }
        timerText += m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');
    }
    else {
        timerText = "BME08";
    }

    fill(255);
    //ellipse(width/2,height/2,50,50);
    textSize(width/4);
    textAlign(CENTER, CENTER);
    text(timerText, width/2, height/2);
}

function taskAlarm()
{
    if (isTimerEnabled) {
        switch(totalseconds) {
            case 900:
            case 1080:
            case 1081:
            case 1200:
            case 1201:
            case 1202: {
                alarm.play();
            }
        }
    }
}