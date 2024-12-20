// find our button and store it in a variable
var fireButton = document.getElementById("fire-button")

// create a function to change the color of fireButton
function changeColor() {
  fireButton.style.backgroundColor = "yellow"
}

// add event listener with changeColor to the button
fireButton.addEventListener("click", changeColor)
