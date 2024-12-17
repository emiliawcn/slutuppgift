const scrollDownButton = document.getElementById('scrollDownButton');

// Make sure the button is visible
scrollDownButton.style.display = "block";

// Add a click event listener to scroll to the desired section
scrollDownButton.addEventListener('click', function () {
    document.querySelector(".obj3").scrollIntoView({
        behavior: 'smooth'
    });
});

/*
// Array of image URLs
const images = [
  "http://31.media.tumblr.com/18b5f8f0a00ad01e50f7ae2f513be52d/tumblr_msqcl4iwM01soh1p8o1_500.png",
  "http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png"
];

let currentIndex = 0; // Tracks the current image index

// Function to change the image
function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length; // Update index
  document.getElementById("theImage").src = images[currentIndex]; // Update image source
}

// Add event listeners to buttons
document.getElementById("arrow-one").addEventListener("click", () => changeImage(-1)); // Left arrow
document.getElementById("arrow-two").addEventListener("click", () => changeImage(1));  // Right arrow
*/