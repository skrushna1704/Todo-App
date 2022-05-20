// console.log("krushna");
show();

let textValue = document.getElementById("textValue");
let addTask = document.getElementById("addTask");

addTask.addEventListener("click", function () {
  let inputTextVal = textValue.value;
  if (inputTextVal == "") alert("please Enter Task");
  if (inputTextVal.trim() != 0) {
    let todotask = localStorage.getItem("todo");
    if (todotask == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(todotask);
    }
    taskObj.push(inputTextVal);
    localStorage.setItem("todo", JSON.stringify(taskObj));
    textValue.value = "";
  }
  show();
});

function show() {
  let todotask = localStorage.getItem("todo");
  if (todotask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(todotask);
  }
  let html = "";
  let taskList = document.getElementById("taskList");
  taskObj.forEach((item, index) => {
    html += ` <tr>
     <th scope="row">${index + 1}.</th>
     <td>${item}</td>
     <td><button type="button" class="editBtn" onclick="edittask(${index})">Edit</button></td>
     <td><button class="deleteBtn" onclick="deletetask(${index})">Delete</button></td>
   </tr>`;
  });
  taskList.innerHTML = html;
}

function edittask(index) {
  let saveindex = document.getElementById("saveindex");
  let saveTask = document.getElementById("saveTask");
  let addTask = document.getElementById("addTask");
  saveindex.value = index;
  let todotask = localStorage.getItem("todo");
  let taskObj = JSON.parse(todotask);
  textValue.value = taskObj[index];
  addTask.style.display = "none";
  saveTask.style.display = "block";
}

let saveTask = document.getElementById("saveTask");

saveTask.addEventListener("click", function () {
  let addTask = document.getElementById("addTask");
  let todotask = localStorage.getItem("todo");
  let taskObj = JSON.parse(todotask);
  let saveindex = document.getElementById("saveindex").value;
  taskObj[saveindex] = textValue.value;
  saveTask.style.display = "none";
  addTask.style.display = "block";
  localStorage.setItem("todo", JSON.stringify(taskObj));
  textValue.value = "";
  show();
});
function deletetask(index) {
  let todotask = localStorage.getItem("todo");
  let taskObj = JSON.parse(todotask);
  taskObj.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(taskObj));
  show();
}
