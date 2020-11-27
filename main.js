// Select element
const selectTarget = function (e) {
    return document.querySelector(e);
}

let menuToggler = selectTarget('.menu-toggle');
let body = selectTarget('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});