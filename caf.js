let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

let images = document.querySelectorAll('.image-slider img');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        let src = image.getAttribute('src');
        let mainImage = document.querySelector('.main-home-image');
        mainImage.src = src;
    });
});

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
  alert('Your order has been placed!');
});
