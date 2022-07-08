
const closeBtn = document.querySelector('.icon-menu');
const modal = document.querySelector('.nav');
function showBuyTicket() {
    modal.classList.add('open')
}
 
function cloesBuyTicket() {
    modal.classList.remove('open')
}
closeBtn.addEventListener('click',showBuyTicket);
modal.addEventListener('click',showBuyTicket)



const closeNav = document.querySelector('.icon-menu--close')
modal.addEventListener('click',cloesBuyTicket)




