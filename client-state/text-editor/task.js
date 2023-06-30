// Получаем ссылку на элементы DOM
const editor = document.getElementById("editor");
const clearButton = document.getElementById("clearButton");

// Проверяем, есть ли сохраненное значение в локальном хранилище
if (localStorage.getItem("savedText")) {
  // Если есть, восстанавливаем значение в текстовом редакторе
  editor.value = localStorage.getItem("savedText");
}

// Сохраняем значение в локальное хранилище при изменении содержимого редактора
editor.addEventListener("input", function (event) {
  localStorage.setItem("savedText", event.target.value);
});

// Очищаем содержимое текстового редактора при нажатии на кнопку "Очистить содержимое"
clearButton.addEventListener("click", function () {
  editor.value = "";
  localStorage.removeItem("savedText");
});
