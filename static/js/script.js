var backgroundImage = document.getElementById('changing-background');
var allImages       = document.querySelectorAll('.use');
var lengthImages    = allImages.length;
var randomNumber    = Math.floor(Math.random() * (lengthImages - 1));

console.log(allImages);

for(var i = 0; i < allImages.length; i++) {
  backgroundImage.style.backgroundImage = `url("${allImages[randomNumber].src}")`;
}
