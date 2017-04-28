var backgroundImage = document.getElementById('changing-background');
var allImages       = document.querySelectorAll('.use');
var lengthImages    = allImages.length;
var randomNumber    = Math.floor(Math.random() * (lengthImages - 1));
var workImages      = document.querySelectorAll('.werk-foto');
var overlay         = document.getElementById('overlay');
var overlayImage    = document.getElementById('overlay-image');

for(var i = 0; i < allImages.length; i++) {
  backgroundImage.style.background = `url("${allImages[randomNumber].src}")`;
}

// console.log(workImages);
//
// workImages.forEach(function(el) {
//   console.log(el.id);
//   document.getElementById(el.id).addEventListener('click', function(e) {
//     var src = e.target.src;
//     if(overlay.classList.contains('hide')) {
//       overlay.classList.remove('hide');
//       overlayImage.style.background = `url(${src})`;
//     }
//   })
// });
