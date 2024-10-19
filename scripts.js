// Select the scroll section and indicators
const scrollSection = document.querySelector('.scroll-section');
const indicators = document.querySelectorAll('.indicator div');

let index = 0; // Index for the current image
const totalImages = scrollSection.children.length; // Number of images

// Function to scroll the images
function scrollImages() {
  index = (index + 1) % totalImages; // Loop back to the first image when reaching the end
  const scrollAmount = index * scrollSection.clientWidth; // Scroll to the width of one image
  scrollSection.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
  updateIndicators(index);
}

// Update the indicators based on the current image
function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Set the interval to automatically scroll every 5 seconds
setInterval(scrollImages, 5000);
