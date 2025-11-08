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

    const start = parseFloat(audio.getAttribute('data-start')) || 0;
    const end = parseFloat(audio.getAttribute('data-end')) || audio.duration;
  let fadeClipDuration = 1.5; // seconds for fade in/out at start/end of clip
  let fadePauseDuration = 0.3; // seconds for fade in/out on pause/resume

    function fadeAudio(targetVolume, duration, callback) {
      const initialVolume = audio.volume;
      const step = (targetVolume - initialVolume) / (duration * 60);
      let frame = 0;
      function fade() {
        frame++;
        audio.volume = Math.max(0, Math.min(1, initialVolume + step * frame));
        if ((step > 0 && audio.volume < targetVolume) || (step < 0 && audio.volume > targetVolume)) {
          requestAnimationFrame(fade);
        } else {
          audio.volume = targetVolume;
          if (callback) callback();
        }
      }
      fade();
    }

    let fadingOut = false;
    let fadingIn = false;
    btn.addEventListener("click", () => {
      if (audio.paused) {
        // Only reset to start if at beginning or after end
        if (audio.currentTime <= start || audio.currentTime >= end) {
          audio.currentTime = start;
          audio.volume = 0;
          fadingIn = true;
          audio.play();
        } else {
          // Resume from paused position, fade in quickly
          fadeAudio(0.5, fadePauseDuration, () => audio.play());
        }
        btn.classList.add("playing");
        btn.setAttribute("aria-label", "Pause");
      } else {
        fadeAudio(0, fadePauseDuration, () => audio.pause());
        btn.classList.remove("playing");
        btn.setAttribute("aria-label", "Play");
      }
    });

    // Fade in at start, fade out at end
    audio.addEventListener("timeupdate", () => {
      // Fade in only once at start of clip
      if (fadingIn && audio.currentTime <= start + fadeClipDuration) {
        fadeAudio(0.5, fadeClipDuration, () => { fadingIn = false; });
      }
      // Fade out only once at end of clip
      if (!fadingOut && end && audio.currentTime >= end - fadeClipDuration) {
        fadingOut = true;
        fadeAudio(0, fadeClipDuration, () => {
          audio.pause();
          btn.classList.remove("playing");
          btn.setAttribute("aria-label", "Play");
          setProgress(0);
          audio.currentTime = start;
          audio.volume = 0.5;
          fadingOut = false;
        });
      }
      // Prevent playing past end
      if (end && audio.currentTime >= end) {
        audio.pause();
        btn.classList.remove("playing");
        btn.setAttribute("aria-label", "Play");
        setProgress(0);
        audio.currentTime = start;
        audio.volume = 0.5;
        fadingOut = false;
      }
      const percent = ((audio.currentTime - start) / (end - start)) * 100;
      setProgress(percent);
    });

    audio.addEventListener("loadedmetadata", () => {
      if (end === 0 || end > audio.duration) {
        audio.setAttribute('data-end', audio.duration);
      }
    });

    audio.addEventListener("ended", () => {
      btn.classList.remove("playing");
      btn.setAttribute("aria-label", "Play");
      setProgress(0);
      audio.currentTime = start;
      audio.volume = 0.5;
    });
  });
});
