var mouse = document.querySelector(".mouse");
var img = document.querySelector(".member1");
img.onmouseover = function() {
  mouse.style.display = "block"
};

img.onmouseout = function(){
  mouse.style.display = "none"
};