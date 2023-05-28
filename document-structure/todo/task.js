 
 const input = document.querySelector(".tasks__input");
 const taskForm = document.getElementById("tasks__form");
 const tasksList = document.querySelector(".tasks__list");
 
 
 const createText = (text) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = "task";

    const taskTitle = document.createElement("div");
    taskTitle.className = "task__title";
    taskTitle.textContent = text;

    const removeLink = document.createElement("a");
    removeLink.href = "#";
    removeLink.className = "task__remove";
    removeLink.textContent = "×";

    tasksList.appendChild(taskDiv);
    taskDiv.appendChild(removeLink);
    taskDiv.prepend(taskTitle);

    removeLink.addEventListener('click', () => {
        taskDiv.remove();
    })
 }

 taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(input.value.trim().length > 0) {
        createText(input.value);
        input.value = "";
    }
 })

