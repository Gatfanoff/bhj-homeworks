const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
let windowsHeight = window.innerHeight;
    reveal.forEach((el) => {
        const elementRect = el.getBoundingClientRect();
        if(elementRect.top > 0 && elementRect.bottom <= windowsHeight) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    })


})










