const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

let taskArr = [];

const addTask = () => {
  const newInput = taskInput.value;

  if (newInput.trim() === "") {
    alert("type something");
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = newInput;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Task";
  removeBtn.classList.add("remove-btn");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  taskArr.push({ task: newInput, completed: false });

  taskInput.value = "";

  newTask.appendChild(removeBtn);
  newTask.appendChild(checkBox);
  taskList.appendChild(newTask);

  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      newTask.style.color = "red";
    } else {
      newTask.style.color = "black";
    }
  });

  removeBtn.addEventListener("click", () => {
    taskList.removeChild(newTask);

    const taskIndex = taskArr.indexOf(newInput);
    if (taskIndex > -1) {
      taskArr.splice(taskIndex, 1);
    }
  });

  console.log(taskArr);
};


document.querySelector(".add-task-btn").addEventListener("click", addTask);
