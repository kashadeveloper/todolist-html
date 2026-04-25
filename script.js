const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("taskList");
const btn = document.getElementById("addTaskBtn");
const form = document.getElementById("taskForm");

function addTask() {
  const text = inputBox.value;
  if (!text) return;

  const newTaskElement = document.createElement("li");
  newTaskElement.className = "task";
  newTaskElement.innerHTML = `${text}<span>x</span>`;
  listContainer.appendChild(newTaskElement);
  inputBox.value = "";
  storeToDoList();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      const isChecked = e.target.classList.contains("checked");
      e.target.classList.toggle("checked", !isChecked);
      storeToDoList();
    }
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeToDoList();
    }
  },
  false,
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

function storeToDoList() {
  localStorage.setItem("to-do-list", listContainer.innerHTML);
}

function restoreToDoList() {
  listContainer.innerHTML = localStorage.getItem("to-do-list");
}

btn.addEventListener("click", addTask);

restoreToDoList();
