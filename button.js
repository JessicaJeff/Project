// find our button and store it in a variable
var fireButton = document.getElementById("fire-button")

// function to change color of fireButton
function toggleColor() {
  // Get the current computed background color
  const currentColor = fireButton.style.backgroundColor

  // ternary statement ---- 
  // fireButton.style.backgroundColor =
  //   currentColor === "orange" ? "yellow" : "orange"

  // Toggle between orange and yellow
  if (currentColor === "orange") {
    // Orange
    fireButton.style.backgroundColor = "yellow"
  } else {
    // Assume any other color is yellow
    fireButton.style.backgroundColor = "orange"
  }
}

// Attach the function to the button's click event
fireButton.addEventListener("click", toggleColor)

// Image function
const lauraPhoto = document.getElementById("photo-laura")
// Change the laura palma image to dale cooper when clicked
lauraPhoto.addEventListener("click", () => {
  if (lauraPhoto.src.includes("Photo1.webp")) {
    lauraPhoto.src = "./Public/Photo2.jpeg"
    lauraPhoto.alt = "Dale Cooper"
  } else {
    // Change back to Laura Palmer image
    lauraPhoto.src = "./Public/Photo1.webp"
    lauraPhoto.alt = "Laura Palmer"
  }
})
