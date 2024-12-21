// find our button and store it in a variable
var fireButton = document.getElementById("fire-button")

// function to change color of fireButton 
function toggleColor() {
  // Get the current computed background color
  const currentColor = window.getComputedStyle(fireButton).backgroundColor;

  // Toggle between orange and yellow
  if (currentColor === "rgb(255, 165, 0)") { // Orange
    fireButton.style.backgroundColor = "yellow";
  } else { // Assume any other color is yellow
    fireButton.style.backgroundColor = "orange";
  }
}

// Attach the function to the button's click event
fireButton.addEventListener("click", toggleColor);
