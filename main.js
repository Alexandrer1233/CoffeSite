const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.body;
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('fixed');
})
window.onscroll = function showHeader(){
    let header = document.querySelector('.header');

        if(window.pageYOffset > 10) {
            header.classList.add('fixed')
        } 
        else if (window.pageYOffset === 0) {
            header.classList.remove('fixed')
        }
}
