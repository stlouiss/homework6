
var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	console.log(video.playbackRate);
	video.playbackRate *= 0.9;
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	console.log(video.playbackRate);
	video.playbackRate /= 0.9;
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log(video.currentTime);
	console.log(video.duration);
	if (video.currentTime < video.duration-5) {
		video.currentTime += 5;
	}
	else{
		video.currentTime = 0;
	}
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	console.log(video.muted);
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});


document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(video.volume);
	min="0";
	max="100"; 
	value="100"; 
	step="10";
	volume.innerHTML = (volumeSlider.value).concat("%");
	video.volume = volumeSlider.value / 100;
});


document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});


document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});

