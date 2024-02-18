function addTodo() {
    let input = document.getElementById("todo-input");
    let inputValue = input.value;
    if (inputValue === '') {
      alert("Please enter a task!");
      return;
    }
    let ul = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button"; 
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    
    ul.appendChild(li);
    input.value = "";
  }
  



  