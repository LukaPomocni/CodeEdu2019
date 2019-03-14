let canvas;
let ctx;

let x = 0;

let dvd = {
  x:0,
  y:0,
  width: 150,
  height: 75,
  velocity: {
    x:0,
    y:0
  },
  src: "http://cdn.onlinewebfonts.com/svg/img_387854.png",
  img: null
}

let border = 5;
let colors = ["#FFFEFB", "#C5B780", "#98CDC1", "#A19E6B", "#2441A3"];

let color = {
    hex:null,
    id:null,
    nextColor: id => {
      let n = 1 + Math.floor(Math.random()*(colors.length-1));
      color.id = (id + n) % colors.length;
      color.hex = colors[color.id]
    }
};

function init() {
  canvas = document.getElementById("myCanvas");
  canvas.width = 600;
  canvas.height = 600;
  ctx = canvas.getContext('2d'); 

  color.id = Math.floor(Math.random()*colors.length)
  color.hex = colors[color.id]


  dvd.img = new Image();
  dvd.img.src = dvd.src;

  let minX = border;
  let minY = border;
  let maxX = canvas.width - dvd.width - border;
  let maxY = canvas.height - dvd.height - border;

  dvd.x = minX + Math.floor(Math.random() * (maxX-minX));
  dvd.y = minY + Math.floor(Math.random() * (maxY-minY));

  let v = 1 + Math.random() * 3;
  dvd.velocity.x = v * (Math.random() < 0.5 ? 1 : -1)
  dvd.velocity.y = v * (Math.random() < 0.5 ? 1 : -1)


  // Zahtevamo sledeci frame (sliku)
  window.requestAnimationFrame(draw);
}

function draw() {
  // Kretanje
  if(dvd.x + dvd.width >= canvas.width){
    dvd.velocity.x *= -1;
    color.nextColor.call(color, color.id)
  }

  if(dvd.y + dvd.height >= canvas.height){
    dvd.velocity.y *= -1;
    color.nextColor.call(color, color.id)
  }

  if(dvd.x <= 0){
    dvd.velocity.x *= -1;
    color.nextColor.call(color, color.id)
  }

  if(dvd.y <= 0){
    dvd.velocity.y *= -1;
    color.nextColor.call(color, color.id)
  }

  dvd.x += dvd.velocity.x;
  dvd.y += dvd.velocity.y;

  // Ocistimo sta je prethodno bilo nacrtano
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Postavimo boju za popunjavanje
  ctx.fillStyle = color.hex;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Iscrtavanje
  // ctx.globalCompositeOperation = "source-in";
  ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.width, dvd.height)

  // Zahtevamo sledeci frame (sliku)
  window.requestAnimationFrame(draw);
}

init();
