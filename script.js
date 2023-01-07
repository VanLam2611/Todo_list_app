const inputData = document.querySelector('.content input');
const btnAdd = document.querySelector('.content button')
const todoList = document.querySelector('.todoList')
const dataTotal = document.querySelector('.footer span')

//Check datas in input form
inputData.onkeyup = () => {
    let userData = inputData.value
    if (userData.trim() != 0) {
        btnAdd.classList.add('active')
    }
    else {
        btnAdd.classList.remove('active')
    }
}
showTodos()
btnAdd.onclick = () => {
    if (inputData.value != '') {
        let dataInput = inputData.value
        let localSg = localStorage.getItem('todo')
        if (localSg == null) {
            arrTodo = []
        }
        else {
            arrTodo = JSON.parse(localSg)
        }
        arrTodo.push(dataInput)
        localStorage.setItem('todo', JSON.stringify(arrTodo))
        btnAdd.classList.remove('active')
    }
    showTodos()
    totalDatas()
}

//Function add todo list
function showTodos() {
    let localSg = localStorage.getItem('todo')
    if (localSg == null) {
        arrTodo = []
    }
    else {
        arrTodo = JSON.parse(localSg)
    }
    let newTags = ''
    arrTodo.forEach((element, index) => {
        newTags += `<li>${element} <span onclick="removeTodo(${index})"><i class='bx bxs-trash-alt'></i></span></li>`
    });
    todoList.innerHTML = newTags
    inputData.value = ''
}

//Function remove todo list
function removeTodo(index) {
    let localSg = localStorage.getItem('todo')
    arrTodo = JSON.parse(localSg)
    arrTodo.splice(index, 1)
    localStorage.setItem('todo', JSON.stringify(arrTodo))
    showTodos()
    totalDatas()
}
totalDatas()
//Function show total data
function totalDatas(){
    let localSg = localStorage.getItem('todo')
    arrTodo = JSON.parse(localSg)
    if(!localSg){
        dataTotal.textContent = 0
    }
    dataTotal.textContent = arrTodo.length
}

//Function clear all item in localStrange
function clearAll(){
    localStorage.clear()
    showTodos()
    totalDatas()
}