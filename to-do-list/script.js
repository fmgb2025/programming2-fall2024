let tasks = ["Fold Laudry", "Make Dinner"];

function showTasks() {
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    for (i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        taskList.appendChild(li);
    }
}

function addTasks() {
    let task = prompt("Enter your task: ");
    tasks.push(task);
    showTasks();
}

function rmTasks() {
    let taskFound = false;
    let task = prompt("Enter task to remove: ");
    task = task.toLowerCase();

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].toLowerCase() === task) {
            tasks.splice(i, 1);
            taskFound = true;
        }
    }
    if (!taskFound) {
        alert("task not found");
    }

    showTasks();
}

function clearTasks() {
    tasks = [];
    showTasks();
}

function prioritizeTasks() {
    let task = prompt("Enter task to prioritize: ");
    let taskFound = false;
    let taskList = document.getElementById("task-list");
    let listItems = taskList.getElementsByTagName("li");
    task = task.toLowerCase();

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].toLowerCase() === task) {
            listItems[i].style.color = "yellow";
            taskFound = true;
        }
    }
    if (!taskFound) {
        alert("task not found");
    }
}
