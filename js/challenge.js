// Pause button
var pauseButton = document.getElementById("pause");
var buttons = document.getElementsByTagName("button");
var playing = true;

pauseButton.addEventListener("click", function () {
  playing = !playing;

  if (!playing) {
    clearInterval(interval);
    this.innerText = "resume";
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].id !== "pause") {
        buttons[i].disabled = true;
      }
    }
  } else {
    interval = setInterval(updateCounter, 1000);
    this.innerText = "pause";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }
});


// Restart button
var restartButton = document.getElementById("restart");

restartButton.addEventListener("click", function () {
  counterValue = 0;
  counter.innerText = counterValue;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
});
