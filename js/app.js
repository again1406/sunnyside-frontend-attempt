const navMenu= document.querySelector('.nav__menu');
const toggleBtn = document.querySelector('.nav__toggle');
const body = document.querySelector('body');
const Header = document.querySelector('header');
toggleBtn.addEventListener('click', function(){
   
    if (Header.classList.contains('open')) {
        // close
        Header.classList.remove('open');
        navMenu.classList.remove('has-fade');
        navMenu.classList.add('fade-out');
        navMenu.classList.remove('fade-in');
        body.classList.remove('noscroll');
    } else {
        // open
        Header.classList.add('open');
        navMenu.classList.add('has-fade');
        navMenu.classList.remove('fade-out');
        navMenu.classList.add('fade-in');
        body.classList.add('noscroll');
    }
})