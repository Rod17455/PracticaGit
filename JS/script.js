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
// 