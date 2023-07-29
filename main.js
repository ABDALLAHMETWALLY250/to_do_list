let tasks = [
  {
    title: "New Task",
    date: "29/7/2023",
  },
];
let retrive = JSON.parse(localStorage.getItem("myTask"));
tasks = retrive ?? [];
// Add New Task
function fillTask() {
  document.getElementById("tasks").innerHTML = "";
  let index = 0;
  for (task of tasks) {
    document.getElementById("tasks").innerHTML += `
  <div class="main-tasks ">
  <div class="icon">
  <button onclick="delTask(${index})">
  <i class="fa-solid fa-trash"></i>
  </button>
  <button onclick="doneTask(  alert('This is Task is Done ${task.title}') ,this.style.display = 'none' )">
  <i class="fa-solid fa-check"></i>
  </button>
  <button onclick="updTask(${index})">
  <i class="fa-solid fa-pen"></i>
  </button>
  
  </div>
  <div class="name">
  <h2>${task.title}</h2>
  <span>${task.date}<i class="fa-regular fa-calendar-days"></i></span>
  </div>
  </div>`;
    index++;
  }
}
fillTask();
document.getElementById("btn").addEventListener("click", () => {
  let x = prompt("Enter Your Task");
  let taskObj = {
    title: x ? x : prompt("Please Enter your Task") || "NO Task",
    date: `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
  };
  tasks.push(taskObj);
  local();
  fillTask();
});
// End Add New Task

//  Del One Task
function delTask(index) {
  let isConfirm = confirm("Did you Sure Delete" + " " + task.title);
  if (isConfirm) {
    tasks.splice(index, 1);
    local();
    fillTask();
  }
}
//   End Del One Task

//  Update One Task
function updTask(index) {
  let isConfirm = confirm("Did you Sure Update" + " " + task.title);
  if (isConfirm) {
    let task = tasks[index];
    let newTaskNAme = prompt("A New Task Name", task.title);
    task.title = newTaskNAme;
    local();
    fillTask();
  }
}
//   End Update One Task

//  Done One Task
function doneTask() {}

//   End Done One Task

// localStorage
function local() {
  let taskString = JSON.stringify(tasks);
  localStorage.setItem("myTask", taskString);
}
