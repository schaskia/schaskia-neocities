
// Minimal audio player for posts
// Usage example:
// <div class="mini-audio-player" data-src="/assets/audio/example.mp3" data-start="10" data-end="20">
//   <button class="mini-play-pause" aria-label="Play/Pause">
//     <svg class="mini-play-icon" ...>...</svg>
//     <svg class="mini-pause-icon" style="display:none" ...>...</svg>
//   </button>
//   <audio preload="auto"></audio>
// </div>

document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.mini-audio-player').forEach(function(player) {
		const audio = player.querySelector('audio');
		const btn = player.querySelector('.mini-play-pause');
		const playIcon = player.querySelector('.mini-play-icon');
		const pauseIcon = player.querySelector('.mini-pause-icon');
		const src = player.dataset.src;
		const start = parseFloat(player.dataset.start) || 0;
		const end = (player.dataset.end !== undefined && player.dataset.end !== "" && player.dataset.end !== null) ? parseFloat(player.dataset.end) : null;
		const fadeDuration = parseFloat(player.dataset.fade) || 1.2; // seconds

		if (src) audio.src = src;

		// Web Audio API setup for fade
		let ctx, source, gainNode, fadeTimeout;
		function setupAudioContext() {
			if (!ctx) {
				ctx = new (window.AudioContext || window.webkitAudioContext)();
				source = ctx.createMediaElementSource(audio);
				gainNode = ctx.createGain();
				gainNode.gain.value = 1;
				source.connect(gainNode).connect(ctx.destination);
			}
		}

		// Seek to start on load
		audio.currentTime = start;
		audio.addEventListener('loadedmetadata', function() {
			audio.currentTime = start;
		});

		// Play/pause logic
		btn.addEventListener('click', function() {
			setupAudioContext();
			if (audio.paused) {
				audio.currentTime = Math.max(audio.currentTime, start);
				fadeIn();
				audio.play();
			} else {
				fadeOut();
			}
		});

		function fadeIn() {
			if (!gainNode) return;
			gainNode.gain.cancelScheduledValues(ctx.currentTime);
			gainNode.gain.setValueAtTime(0, ctx.currentTime);
			gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + fadeDuration);
		}
		function fadeOut() {
			if (!gainNode) return;
			gainNode.gain.cancelScheduledValues(ctx.currentTime);
			gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
			gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + fadeDuration);
			setTimeout(() => { audio.pause(); }, fadeDuration * 1000);
		}

		audio.addEventListener('play', function() {
			playIcon.style.display = 'none';
			pauseIcon.style.display = 'inline';
		});
		audio.addEventListener('pause', function() {
			playIcon.style.display = 'inline';
			pauseIcon.style.display = 'none';
		});

		// Stop at end time with fade out
		if (end !== null && !isNaN(end) && end > 0) {
			audio.addEventListener('timeupdate', function() {
				if (audio.currentTime >= end - fadeDuration && !audio.paused) {
					fadeOut();
				}
				if (audio.currentTime >= end) {
					audio.pause();
					audio.currentTime = start;
				}
			});
		}

		// Reset to start if ended
		audio.addEventListener('ended', function() {
			audio.currentTime = start;
			playIcon.style.display = 'inline';
			pauseIcon.style.display = 'none';
		});
	});
});
