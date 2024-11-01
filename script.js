let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100; // Move left by 100% of the container width
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
}

// Change image every 5 seconds
setInterval(showNextImage, 5000);
