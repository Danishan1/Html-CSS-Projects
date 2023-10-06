const imageElement = document.getElementById("changing-image");
const imagePaths = [
  "../src/personal/D4.jpg",
  "../src/personal/G4.jpg",
  "../src/personal/D1.jpg",
  "../src/personal/G7.jpg",
  "../src/personal/G1.jpg",
  "../src/personal/D5.jpg",
  "../src/personal/G6.jpg",
  "../src/personal/D2.jpg",
  "../src/personal/G2.jpg",
  "../src/personal/G8.jpg",
]; // Add your image URLs here

let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  const newImagePath = imagePaths[currentIndex];
  imageElement.src = newImagePath;
}

setInterval(changeImage, 5000); // Change image every 10 seconds
