const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const item = document.querySelectorAll('.dropdown__item');

value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
})

item.forEach(el => {
    el.addEventListener('click', evt => {

        evt.preventDefault();
        list.classList.remove('dropdown__list_active');
        value.textContent = el.querySelector('.dropdown__link').textContent;

    })
})
