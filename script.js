window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let TensElement = document.getElementById("tens");
  let SecondsElement = document.getElementById("seconds");
  let buttonStartElement = document.getElementById("button-start");
  let buttonStopElement = document.getElementById("button-stop");
  let buttonResetElement = document.getElementById("button-reset");
  let Interval;

  buttonStartElement.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStopElement.onclick = function () {
    clearInterval(Interval);
  };

  buttonResetElement.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    TensElement.innerHTML = tens;
    SecondsElement.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      TensElement.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      TensElement.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      if (seconds > 9) {
        SecondsElement.innerHTML = seconds;
      } else {
        SecondsElement.innerHTML = "0" + seconds;
      }
      tens = 0;
      TensElement.innerHTML = "0" + 0;
    }
  }
};
