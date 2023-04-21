const button= document.querySelector(".btn-add")
const input= document.querySelector(".input-task")
const list = document.querySelector(".list-tasks")

let listItem=[]

function addTask(){
    if (!input.value.trim()) {
        alert("Digite uma tarefa para adicionar");
        return;
    }

    listItem.push({
        tarefa:input.value,
        complete:false
    })

    input.value=''
   
    showAks()
}

function showAks(){

    let newTask='';

    listItem.forEach((item,index)=>{
        newTask= newTask + `
        <li class="task ${item.complete && "done"}">
            <img src="./img/checked.png" alt="check icon" onclick="completeTask(${index})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="trash-icon" onclick="deleteItem(${index})">
        </li>
        `
    })



    list.innerHTML=newTask

    localStorage.setItem('lista', JSON.stringify(listItem))
    
}

function completeTask(index){
    listItem[index].complete = !listItem[index].complete 
    showAks()
}

function deleteItem(index){
    listItem.splice(index, 1)

    showAks()
}

function saveList(){
    const taskLocalStorage= localStorage.getItem("lista")

    if(taskLocalStorage){
    listItem= JSON.parse(taskLocalStorage)
}
    showAks()
}


saveList()
button.addEventListener("click",addTask)
