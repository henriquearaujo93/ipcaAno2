var navbar = document.getElementById("navbar");
var video = document.getElementById("video-background");
var mutedImage = document.getElementById("mutedImg");
var progressBar = document.getElementById("progressBar");
var progressBarSize = navbar.offsetWidth;
progressBar.style.width = "0px";

console.log(progressBarSize);

//Mute click event
mutedImage.addEventListener('click', event => {

    video.muted = false;
    video.volume = 1;

    mutedImage.parentNode.removeChild(mutedImage);
})

window.addEventListener("scroll", function(){

    var scroll = this.scrollY;

    if(scroll > 490){
        navbar.classList.add('navbar', 'fixed-top', 'stick');
        video.pause()
    } else{
        navbar.classList.remove('navbar', 'fixed-top', 'stick');
        video.play();
    }
})

video.addEventListener("timeupdate", function(){

    currentTime = parseInt(video.currentTime * progressBarSize / video.duration);

    progressBar.style.width = currentTime + "px";

    //console.log(currentTime);


})

