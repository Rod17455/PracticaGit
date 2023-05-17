// JavaScript
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("¡Hola! Has hecho clic en el botón.");
});

// JavaScript
var showImageBtn = document.getElementById("showImageBtn");
var myImage = document.getElementById("myImage");

showImageBtn.addEventListener("click", function() {
    if (myImage.style.display === "none") {
        myImage.src = "kenny.jfif";
        myImage.style.display = "block";
      } else {
        myImage.style.display = "none";
      }
});

// JavaScript
var showGifBtn = document.getElementById("showGifBtn");
var myGif = document.getElementById("myGif");

showGifBtn.addEventListener("click", function() {
  if (myGif.style.display === "none") {
    myGif.src = "kenny-bailando.gif";
    myGif.style.display = "block";
  } else {
    myGif.style.display = "none";
  }
});