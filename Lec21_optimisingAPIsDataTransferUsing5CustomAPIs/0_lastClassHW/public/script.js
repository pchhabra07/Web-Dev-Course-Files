
const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const clearCompletedButton = document.getElementById('clear-completed')
const filterButtonContainer = document.querySelector('.filter-buttons')
const filterButtons= document.querySelectorAll('.filter-buttons button')
let activeId = 'all'

let tasks = [];

taskForm.addEventListener('submit',addTask);

function addTask(event){

    event.preventDefault();
    const task = taskInput.value.trim()
    tasks.push({
        text:task,
        completed:false
    })

    //Add Task API
    axios.post('/tasks/add',{text:task,completed:false})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

    taskInput.value=''
    renderTaskList()
}

function renderTaskList(newTasks=tasks){
    taskList.innerHTML=''

    newTasks.forEach((task,index)=>{
        const li = document.createElement('li')

        li.innerHTML=`
            <span>${task.text}</span>
            <div>
                <button class="complete-button">${task.completed?"Undo":"complete"}</button>
                <button class="edit-button">edit</button>
                <button class="delete-button">delete</button>
            </div>
        `
        const deleteButton = li.querySelector('.delete-button')
        const editButton = li.querySelector('.edit-button')
        const completeButton = li.querySelector('.complete-button')

        deleteButton.addEventListener('click',()=>{deleteTask(index)})
        editButton.addEventListener('click',()=>{editTask(li,index)})
        completeButton.addEventListener('click',()=>{completeTask(index)})

        li.className=`task-item ${task.completed?'completed':''}`

        taskList.appendChild(li)
    })

}

function deleteTask(index){
    tasks.splice(index,1);

    //Delete Task API
    axios.post('/tasks/delete',{idx:index})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

    renderTaskList()
}

function editTask(li,index){

    const span = li.firstElementChild;

    const input = document.createElement('input')
    input.type='text'
    input.value=tasks[index].text
    input.focus()
    li.replaceChild(input,span)

    if(input.value){
        input.addEventListener('blur',()=>{
            tasks[index].text=input.value

            //Edit Task API
            axios.post('/tasks/edit',{idx:index,text:input.value})
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                })
        
            renderTaskList()
        })
    }
}

function completeTask(index){
    tasks[index].completed=!tasks[index].completed

    //Complete Task API
    axios.post('/tasks/completeTask',{idx:index})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        
    renderTaskList()
}

filterButtonContainer.addEventListener('click',(event)=>{
    activeId = event.target.getAttribute('id')

    filterButtons.forEach((item)=>{
        const itemId = item.id
        if(itemId==activeId){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })

    if(activeId=='all'){
        renderTaskList()
    }

    if(activeId=='active'){
        let newTasks = tasks.filter((task)=>{
            return (task.completed==false)
        })
        renderTaskList(newTasks)
    }

    if(activeId=='completed'){
        let newTasks = tasks.filter((task)=>{
            return (task.completed==true)
        })
        renderTaskList(newTasks)
    }
})

clearCompletedButton.addEventListener('click',()=>{
    tasks = tasks.filter((task)=>{
        return (task.completed==false)
    })

    //Clear Completed Task API
    axios.post('/tasks/clear-completed',{})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })


    if(activeId!='completed'){
        renderTaskList()
    }else{
        renderTaskList([])
    }

    
})

function getTasks(){
    axios.get('/tasks')
        .then(data=>{
            tasks=data.data;
            renderTaskList()
        })

        .catch(err=>{
            console.log(err);
        })
}

getTasks()





