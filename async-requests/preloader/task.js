let loader = document.getElementById("loader");
let itemsContainer = document.getElementById("items");

fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function (data) {
    // Скрыть анимацию загрузки
    loader.classList.remove("loader_active");

    // Очистить содержимое контейнера
    itemsContainer.innerHTML = "";

    // Обработка данных о курсе валют
    let valuteData = data.response.Valute;
    for (let key in valuteData) {
      if (valuteData.hasOwnProperty(key)) {
        let valuteItem = valuteData[key];
        let currencyItem = document.createElement("div");
        currencyItem.className = "item";

        let codeElement = document.createElement("div");
        codeElement.className = "item__code";
        codeElement.textContent = valuteItem.CharCode;

        let valueElement = document.createElement("div");
        valueElement.className = "item__value";
        valueElement.textContent = valuteItem.Value;

        let currencyElement = document.createElement("div");
        currencyElement.className = "item__currency";
        currencyElement.textContent = "руб.";

        currencyItem.appendChild(codeElement);
        currencyItem.appendChild(valueElement);
        currencyItem.appendChild(currencyElement);

        itemsContainer.appendChild(currencyItem);
      }
    }
  })
  .catch(function (error) {
    // Обработка ошибок
    console.error("Error:", error);
    loader.classList.remove("loader_active");
  });
