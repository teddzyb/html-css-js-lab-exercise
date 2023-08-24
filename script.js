function addListItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todoInput").value;
  let t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("todoInput").value = "";
}
