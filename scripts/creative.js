window.addEventListener('DOMContentLoaded', function() {
    const images = ['images/creative-front.webp', 'images/creative-truck.webp']; // Add paths to your images
    const imageElement = document.querySelector('.slideshow');
    let currentIndex = 0;

    function changeImage() {
        imageElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 5000); // Change image every 3 seconds (adjust as needed)
});



// this is for the email

//  const recipient = 'nick@signsbycss.com';

//  const subject = 'Free quote';

//  const body = 'Start by telling us the sign type, dementions, and please send over a picture of your logo';

//  const malitoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//  window.location.href = malitoLink;