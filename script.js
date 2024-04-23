function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = input;
    li.onclick = function() {
        this.parentNode.removeChild(this);
    };
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}
