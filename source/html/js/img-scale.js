var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d", { alpha: false });
var textures = document.querySelectorAll(".texture");

var texture = textures[0];

var sprite = {
  scale: 1,
  src: texture,
  sWidth: texture.width,
  sHeight: texture.height
};

var vw = 0;
var vh = 0;

var tl = new TimelineMax({ paused:true });

for (var i = 0; i < textures.length; i++) {    
  tl.set(sprite, { src: textures[i], scale: 1 })
    .to(sprite, 1, { scale: 2, ease: scaleEase(1, 2) });
}

var animation = new TimelineMax({ repeat: -1, paused: true })      
  .to(tl, 15, { progress: 1, ease: Power1.easeInOut })
  .to(tl, 10, { progress: 0, ease: Power4.easeInOut })

window.addEventListener("load", onLoad);

function onLoad() {
    
  resize();
  animation.play();  
  TweenLite.ticker.addEventListener("tick", draw);
  window.addEventListener("resize", resize); 
}

function draw() {
  
  var w = sprite.sWidth * sprite.scale;
  var h = sprite.sHeight * sprite.scale;
  
  var cx = (vw - w) / 2;
  var cy = (vh - h) / 2;
    
  context.clearRect(0, 0, vw, vh);    
  context.drawImage(sprite.src, 0, 0, sprite.sWidth, sprite.sHeight, cx, cy, w, h);
}

function resize() {
  
  vw = canvas.width = window.innerWidth;
  vh = canvas.height = window.innerHeight;
  
  var cx = vw / 2;
  var cy = vh / 2;
  
  var scaleX = vw / sprite.sWidth;
  var scaleY = vh / sprite.sHeight;
  
  var scale = Math.max(scaleX, scaleY);
    
  context.translate(cx, cy);
  context.scale(scale, scale);
  context.translate(-cx, -cy);
}

function scaleEase(start, end) {
  var factor = Math.log(end/start),
      change = end - start;
  return function(v) {
    return (start * Math.exp(factor*v) - start) / change;
  };
} 