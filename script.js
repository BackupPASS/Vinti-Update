let currentIndex = 0;
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpeg',
    'image4.jpeg',
    'image5.jpg',
];
const slideshow = document.getElementById('background-slideshow');

function changeBackground(index) {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    currentIndex = index;
}

function nextBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
}


changeBackground(0);


setInterval(nextBackground, 5000);


