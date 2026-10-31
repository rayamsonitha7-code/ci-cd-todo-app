function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        li.style.textDecoration =
            checkbox.checked ? "line-through" : "none";
    });

    let taskText = document.createElement("span");
    taskText.textContent = " " + task + " ";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
