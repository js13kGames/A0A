export default function Graphics(canvas, sprites) {

  let ctx = canvas.ctx;

  let cameraX = 0,
      cameraY = 0;

  this.fill = (color) => {
    ctx.fillStyle = color;
  };

  this.clear = () => {
    ctx.clearRect(0, 0, 320, 180);
  };

  this.fr = (x, y, w, h) => {
    ctx.fillRect(x, y, w, h);
  };

  this.camera = (x = 0, y = 0) => {
    cameraX = x;
    cameraY = y;
  };

  this.sspr = (sx, sy, sw, sh, dx, dy, dw = sw, dh = sh, flipx = false) => {

    dx = Math.floor(dx - cameraX);
    dy = Math.floor(dy - cameraY);


    if (flipx) {

      ctx.scale(-1, 1);
      dx *= -1;
      dx -= dw;
    }

    ctx.drawImage(sprites, 
                  sx,
                  sy,
                  sw,
                  sh,
                  dx,
                  dy,
                  dw, 
                  dh);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  };

}
