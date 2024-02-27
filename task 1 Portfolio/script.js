// script.js

document.addEventListener("DOMContentLoaded", function () {
  var welcomeMessage = "Welcome to Palak Jaggi's Portfolio!";
  alert(welcomeMessage);
});











// script.js

function changeBackgroundColor() {
    // Generate random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Change background color of the element with id "page1"
    document.getElementById('page1').style.backgroundColor = randomColor;
}
