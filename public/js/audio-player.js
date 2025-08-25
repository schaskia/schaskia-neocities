document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".audio-player").forEach(player => {
    const btn = player.querySelector(".circle-btn");
    const audio = player.querySelector("audio");
    audio.volume = 0.5;
    const progressRing = player.querySelector(".circle-progress");

    // read radius from CSS variable
    const radius = getComputedStyle(document.documentElement)
      .getPropertyValue("--circle-radius").trim();
    const circumference = 2 * Math.PI * radius;

    progressRing.style.strokeDasharray = circumference;
    progressRing.style.strokeDashoffset = circumference;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      progressRing.style.strokeDashoffset = offset;
    }

    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        btn.classList.add("playing");
        btn.setAttribute("aria-label", "Pause");
      } else {
        audio.pause();
        btn.classList.remove("playing");
        btn.setAttribute("aria-label", "Play");
      }
    });

    audio.addEventListener("timeupdate", () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    });

    audio.addEventListener("ended", () => {
      btn.classList.remove("playing");
      btn.setAttribute("aria-label", "Play");
      setProgress(0);
    });
  });
});
