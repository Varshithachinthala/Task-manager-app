async function addTask() {
    let task = document.getElementById("taskInput").value;

    await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({task})
    });

    loadTasks();
}

async function loadTasks() {
    let res = await fetch("http://localhost:3000/tasks");
    let data = await res.json();

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    data.forEach((t, i) => {
        list.innerHTML += `<li>${t.task} 
        <button onclick="deleteTask(${i})">X</button></li>`;
    });
}

async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
    });
    loadTasks();
}

loadTasks();