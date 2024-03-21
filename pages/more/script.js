let foam = false;

function hide () {
  document.getElementById("spinner").style.opacity = "0";
}

setTimeout(hide, 2000);

var x = 1;
var bgImage = document.querySelector('.simulation');

function move(){
  x = x + .1;
  bgImage.style.backgroundPositionX = x + "px";
}

setInterval(move, 1);

window.addEventListener('scroll', function() {
  var y = window.scrollY;
  if(y > 1800) {
    document.querySelector('.topbar-overlay').style.height = "0px";
    document.querySelector('.play').style.opacity = "100%";
    document.querySelector('.label').style.opacity = "100%";
  }
  else {
    document.querySelector('.topbar-overlay').style.height = "130px";
    document.querySelector('.play').style.opacity = "0%";
    document.querySelector('.label').style.opacity = "0%";
  }
});

document.getElementById('play').onmousedown = function(e) {
  document.getElementById('leo').src = "/files/images/leo_yelling.png";
  document.getElementById('sound-wave').style.display = "block";
  if(foam) {
    document.getElementById('sound-wave').style.animation = "wave-absorb 3s linear";
    setTimeout(function(){
      document.getElementById('leo').src = "/files/images/leo_idle.png";
      setTimeout(function(){
        document.getElementById('sound-wave').style.display = "none";
        document.getElementById('sound-wave').style.animation = "";
      }, 1900);
    }, 1000);
  } else {
    document.getElementById('sound-wave').style.animation = "wave-bounce 5s linear";
    setTimeout(function(){
      document.getElementById('leo').src = "/files/images/leo_idle.png";
      setTimeout(function(){
        document.getElementById('sound-wave').style.display = "none";
        document.getElementById('sound-wave').style.animation = "";
      }, 4000);
    }, 1000);
  }
}

document.getElementById('label').onmousedown = function(e) {
  foam = !foam;
  if (foam) {
    document.getElementById('foam').style.display = "block";
    document.getElementById('label').innerHTML = "Disable Acoustic Foam";
  } else {
    document.getElementById('label').innerHTML = "Enable Acoustic Foam";
    document.getElementById('foam').style.display = "none";
  }
}