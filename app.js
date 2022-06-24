let addToDoBtnElem = document.querySelector("#toDoBtn");
let todoContainerElem = document.querySelector("#todoContainer");
let inputFieldElem = document.querySelector("#inputField")

addToDoBtnElem.addEventListener("click", function(){
    var task = document.createElement('p');
    task.classList.add("task");
    task.textContent = inputFieldElem.value;
    inputFieldElem.value = "";
})