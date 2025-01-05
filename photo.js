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
