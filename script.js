const form = document.querySelector(".form");
const input = document.querySelector("#input");
const list = document.querySelector("#result");
const btn = document.querySelector("#button");

form.addEventListener('submit', (e) => {
e.preventDefault();
const task = input.value;
input.value ="";
if (!task) {
alert("PLS enter task");
return;
}
const output = document.createElement("div");
output.classList.add("task");      
const output2 = document.createElement("div");
output2.classList.add("todo-item");
output2.innerText=task;
output.appendChild(output2);
list.appendChild(output);
output.addEventListener('click', () => {
list.removeChild(output);
});
});