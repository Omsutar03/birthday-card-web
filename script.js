window.requestAnimFrame = function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
  // window.requestAnimationFrame ||
  // window.webkitRequestAnimationFrame ||
  // window.mozRequestAnimationFrame ||

};

// now we will setup our basic variables for the demo
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  // full screen dimensions
  cw = window.innerWidth,
  ch = window.innerHeight,

  window, onload = function() {
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];
    function init() {
      box.addEventListener("click", openBox);
    }
    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox);
      }
      stepClass(step);
      if (step === 4) {
        reveal();
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }

    init();

  };

function reveal() {
  document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
}

