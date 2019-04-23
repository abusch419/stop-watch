// creates a click handler when the window loads 
window.onload = function () {
  $("#start").on("click", start)
  $("#stop").on("click", stop)
  $("#reset").on("click", reset)
  $("#lap").on("click", recordLap)
}

// declare some global variables 

var intervalId;
var clockRunning = false;
var time = 0;
var lap = 1;

function reset() {
  time = 0;
  lap = 1;
  $("#display").text("00:00");
  $("#laps").text("");
}

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
  
}
function stop() {
  clearInterval(intervalId);
  clockRunning = false;
}

function recordLap() {
  var convertedTime = timeConverter(time);
  $("#laps").append("<p>Lap" + lap + " : " + convertedTime + "</p>");
  lap++; 
  
}
function count() {
  convertedTime = timeConverter(time);
  $("#display").text(convertedTime);
  time++;
  

}
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;



}

