let currentIndex = 0;
const images = [
    'image1.jpg',
    'image2.jpg',
    'image1.jpg',
    'image2.jpg',
    'image1.jpg',
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


   function getPassword() {
    const password = prompt("This website is password protected. Please enter the password to access:");

    if (password === 'PlingifyPlug') {

      alert('Correct password. You can access the site now.');
    } else {
      const lastFailedAttemptTimestamp = localStorage.getItem('lastFailedAttemptTimestamp');
      const now = new Date().getTime();
      if (lastFailedAttemptTimestamp && parseInt(lastFailedAttemptTimestamp) + (60 * 60 * 1000) > now) { // Check if within 1 hour
        handleLockout();
      } else {
        const failedAttempts = parseInt(localStorage.getItem('failedAttempts')) || 0;
        localStorage.setItem('failedAttempts', failedAttempts + 1);
        if (failedAttempts >= 2) { 
          handleExceededAttempts();
        } else {
          alert('Incorrect password. Please try again.');
          localStorage.setItem('lastFailedAttemptTimestamp', now);
          getPassword();
        }
      }
    }
  }


  function handleLockout() {

    alert('You have exceeded the maximum number of failed attempts. You have been redirected away from the site for 1 hour.');
    localStorage.removeItem('failedAttempts');
    localStorage.removeItem('lastFailedAttemptTimestamp');
    window.location.href = 'https://backuppass.github.io/PASS/'; // 
  }


  function handleExceededAttempts() {

    alert('You have exceeded the maximum number of failed attempts. You have been banned from the site for 1 hour.');
    localStorage.removeItem('failedAttempts');
    localStorage.removeItem('lastFailedAttemptTimestamp');
    window.location.href = 'https://backuppass.github.io/PASS/'; 
  }

  window.addEventListener('load', getPassword);