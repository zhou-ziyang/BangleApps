const radius = 5;
const offset = 10;
const r_step = 5;

function draw_handle(angle) {
  let x = 100 * Math.sin(Math.PI * 2 * angle / 360) + 120;
  let y = 100 * Math.cos(Math.PI * 2 * angle / 360) + 240;
  g.fillCircle(x, y, radius);
}

function draw_handles(angle) {
  const number = 20;
  for (i = 0; i < number; i++) {
    const angle_handle = i * (360 / number) + angle;
    draw_handle(angle_handle);
  }
}

function draw(angle) {
  g.clear();
  g.drawCircle(120, 240, 15);
  draw_handles(angle);
}

function clockwise() {
  angle = angle - r_step;
  draw(angle);
}

function counterclockwise() {
  angle = angle + r_step;
  draw(angle);
}

g.clear();
g.drawCircle(120, 240, 15);
let angle  = 0;
draw_handles(angle);
//const interval = setInterval(countDown, 100);

Bangle.on('swipe', function(directionLR) {
  if (directionLR == 1) {
    clockwise();
  } else if (directionLR == -1) {
    counterclockwise();
  }
  
  msg = ["R", directionLR];
  Bluetooth.println(msg.join(","));
});
