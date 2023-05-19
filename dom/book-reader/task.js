const fontButtons = document.querySelectorAll('.font-size');

fontButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Удаление класса font-size_active у всех кнопок
    fontButtons.forEach((btn) => {
      btn.classList.remove('font-size_active');
    });

    // Добавление класса font-size_active к нажатой кнопке
    button.classList.add('font-size_active');

    // Получение значения data-size выбранной кнопки
    const fontSize = button.getAttribute('data-size');

    // Удаление всех классов размера шрифта у элемента книги
    const book = document.getElementById('book');
    book.classList.remove('book_fs-small', 'book_fs-big');

    // Добавление класса размера шрифта, соответствующего выбранной кнопке
    if (fontSize === 'small') {
      book.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});