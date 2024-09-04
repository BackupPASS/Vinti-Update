let currentIndex = 0;
const images = [

    'image2.jpg',

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


setTimeout(function() {
  showCookieNotice();
}, 1000);


  function hasAcceptedCookies() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted='));
  }

  function showCookieNotice() {
    if (!hasAcceptedCookies()) {
      document.getElementById('cookie-card').style.display = 'block';
    }
  }

  function acceptCookies() {
    document.getElementById('cookie-card').style.display = 'none'; 

    document.cookie = 'cookieAccepted=true; max-age=31536000'; 
  }


  document.getElementById('accept-cookies').addEventListener('click', acceptCookies);


  setTimeout(showCookieNotice, 1000);

  document.cookie = "username=JohnDoe; path=/; secure; HttpOnly";


        const authCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw6b';
        console.log(authCode); 



  

    

 

  
