var content = document.getElementById('content');
var middle = document.getElementById('middle');
var button = document.getElementById('button');


button.onclick = function() {
    if (content.className == 'open' && middle.className == 'open') {
        content.className = '';
        middle.className = '';
        button.innerHTML = 'More info »';
    } else {
        content.className = 'open';
        middle.className = 'open';
        button.innerHTML = '« Back';
    }
};

// creëer een mist aan/uit knop, de JS mist is loeizwaar

window.onload = function () {

  // get the canvas and context and store in vars
  var canvas = document.getElementById("sky");
  var ctx = canvas.getContext("2d");

  // set canvas dimensions to window height and width
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  //generate the snowflakes and apply attributes
  var mf = 20000; // max flakes
  var flakes = [];

  // loop through the empty flakes and apply attributes
  for (var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*1, // min of 2px, +5 = max of 7px
      d: Math.random() + 1 // density of the flake
    });
  }

  // draw flakes onto canvas
  function drawFlakes() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(108, 135, 122, 0.2)";
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  // animate the flakes
  var angle = 0;

  function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < mf; i++) {

      // store current flake
      var f = flakes[i];

      // update X and Y coordinate of each snowflakes
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;

      // if the snowflake reaches the bottom, send a new one to the top
      if (f.y > H) {
        flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d};
      }

    }
  }

  setInterval(drawFlakes, 90);

};
