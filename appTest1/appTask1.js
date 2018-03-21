function runApp() {

  let buttonElement = document.getElementById("buttonElement");
  let RunningTasks = document.getElementById("RunningTasks");
  let taskInput = document.getElementById("taskInput");

  buttonElement.addEventListener("click", function() {

    let newElem = document.createElement("LI");
    let newContent = document.createTextNode(taskInput.value);

    let newButton = document.createElement("BUTTON");
    let buttonName = document.createTextNode("END TASK");
    newButton.appendChild(buttonName);
    newButton.addEventListener("click", function() {
      newElem.parentNode.removeChild(newElem);
    });

    newElem.appendChild(newContent);
    newElem.appendChild(newButton);

    RunningTasks.appendChild(newElem);
  });
}
runApp();