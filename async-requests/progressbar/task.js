const progress = document.getElementById("progress");
const form = document.getElementById("form");
const sendButton = document.getElementById("send");

// Обработчик отправки формы
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  sendButton.disabled = true;

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {

      const percent = (event.loaded / event.total) * 100;
      progress.value = percent;
    }
  });

  // Отслеживаем событие завершения загрузки
  xhr.addEventListener("load", function () {
    progress.value = 100;

    sendButton.disabled = false;
  });

  // Отслеживаем событие ошибки загрузки
  xhr.addEventListener("error", function () {
    sendButton.disabled = false;
  });

  // Отправляем запрос на сервер
  xhr.open("POST", form.action);
  xhr.send(formData);
});
