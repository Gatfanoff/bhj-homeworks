document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("subscribe-modal");
  var closeButton = modal.querySelector(".modal__close");

  // Проверяем, было ли окно уже показано
  if (!localStorage.getItem("modalShown")) {
    // Показываем окно, если оно еще не было показано
    modal.classList.add("modal_active");
  }

  closeButton.addEventListener("click", function () {
    // Закрываем окно по нажатию на кнопку закрытия
    modal.classList.remove("modal_active");
    // Сохраняем информацию о закрытии окна в localStorage
    localStorage.setItem("modalShown", true);
    
  });
  
});
