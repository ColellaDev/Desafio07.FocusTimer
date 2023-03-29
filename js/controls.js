export function Controls({
  secondsDisplay,
  minutesDisplay,
  rainAudio,
  fireplaceAudio,
  coffeeshopAudio,
  forestAudio,
}) {
  
  let timerTimeout;

  function pauseMusic() {
    rainAudio.pause();
    fireplaceAudio.pause();
    coffeeshopAudio.pause();
    forestAudio.pause();
  }

  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if (minutes <= 0) {
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
      }

      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

      countdown();
    }, 1000);
  }

  function pause() {
    clearTimeout(timerTimeout);
  }

  function reset() {
    clearTimeout(timerTimeout);
    secondsDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
  }

  function plus() {
    let minutes = Number(minutesDisplay.textContent);
    minutes = minutes + 5;
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }

  function minus() {
    let minutes = Number(minutesDisplay.textContent);
    minutes = minutes - 5;
    if (minutes <= 0) {
      return;
    }
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }

  return {
    pauseMusic,
    countdown,
    pause,
    reset,
    plus,
    minus,
    timerTimeout,
  };
}
