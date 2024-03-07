const burgerButton = document.querySelector('#menu');
const navBar = document.querySelector('.navBar');

burgerButton.addEventListener('click', () => {
    console.log('show');
    navBar.classList.toggle("show");
}) 

