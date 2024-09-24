const taskInput = document.querySelector(".task-input");
const taskAdd = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");

taskAdd.addEventListener("click", function () {
  const newInput = taskInput.value;

  if (newInput.trim() === "") {
    alert("type something");
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = newInput;
  taskList.appendChild(newTask);

  taskInput.value = "";
});
