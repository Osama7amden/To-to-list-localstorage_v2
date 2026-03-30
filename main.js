// array of tasks
let tasks = let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// function to display tasks
function displayTasks() {
  document.querySelector(".tasks").innerHTML = "";
  let id = 0;
  for (task of tasks) {
    let content = `
          <div class="task">
            <li class= "li ${task.isDone? 'check': '' }">
              <h4>${task.title}</h4>
              <i class="fa-solid fa-calendar-days"></i>
              <span>${task.date}</span>
            </li>
            <div class="icons">
              <i class="fa-solid fa-trash" onclick="deleteTask(${id})"></i>
              <i class="fa-solid ${task.isDone? 'fa-xmark': 'fa-check'} " onclick="checked(${id})"></i>
              <i class="fa-solid fa-pen" onclick="editTask(${id})"></i>
            </div>
          </div>
    `;
    document.querySelector(".tasks").innerHTML += content;
    id++;
  }
}

displayTasks()


// add btn effect

document.getElementById("add_Btn").addEventListener("click", () => {
  let taskTitle = prompt("ادخل المهمه");
  let date = new Date();
  tasks.push({
    title: taskTitle,
    date:
      date.getHours() +
      ":" +
      date.getMinutes() +
      " | " +
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate(),
    isDone: false,
  });
    localStorage.setItem("tasks",JSON.stringify(tasks))
  displayTasks();
});

// function for delete tasks

function deleteTask(id) {
  let isConfirmed = confirm("هل انت متاكد من حذف " + tasks[id].title);
  if (isConfirmed) {
    tasks.splice(id, 1);
    localStorage.setItem("tasks",JSON.stringify(tasks))
    displayTasks();
  }
}

// function to check

function checked(id) {
  if(tasks[id].isDone){
    tasks[id].isDone = false
  }else{
    tasks[id].isDone = true
  }
    localStorage.setItem("tasks",JSON.stringify(tasks))
    displayTasks();
}

// function to edit
function editTask(id) {
  let newtaskTitle = prompt("ادخل المهمه الجديده ", tasks[id].title);
  tasks[id].title = newtaskTitle;
  localStorage.setItem("tasks",JSON.stringify(tasks))
  displayTasks();
}
// local storage
