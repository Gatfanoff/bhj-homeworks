function getRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.send();
}

// Функция для отображения опроса на странице
function displayPoll(poll) {
  let titleElement = document.getElementById("poll__title");
  titleElement.textContent = poll.data.title;

  let answersElement = document.getElementById("poll__answers");
  answersElement.innerHTML = "";

  poll.data.answers.forEach(function (answer) {
    let button = document.createElement("button");
    button.classList.add("poll__answer");
    button.textContent = answer;
    button.addEventListener("click", function () {
      alert("Спасибо, ваш голос засчитан!");
    });
    answersElement.appendChild(button);
  });
}

// Загрузка случайного опроса
getRequest(
  "https://students.netoservices.ru/nestjs-backend/poll",
  function (response) {
    displayPoll(response);
  }
);
