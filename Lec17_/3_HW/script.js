const taskForm=document.getElementById('task-form');
const filterButtonContainer=document.getElementById('filter-buttons');
const filterButtons=document.querySelectorAll('.filter-buttons button');
const taskInput=document.getElementById('task-input');
const taskList=document.getElementById('task-list');
const clearCompletedButton=document.getElementById('clear-completed');
let activeId='all';

const allFilterButton=document.getElementById('all');
const activeFilterButton=document.getElementById('active');
const completedFilterButton=document.getElementById('completed');


let tasks=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
renderTaskList();

function saveTasks(){
    let stringifiedTasks=JSON.stringify(tasks);
    localStorage.setItem('tasks',stringifiedTasks);
}

taskForm.addEventListener('submit',addTask)

function addTask(event){
    event.preventDefault();
    let taskValue=taskInput.value.trim();
    
    tasks.push({
        text:taskValue,
        completed:false
    })

    taskInput.value='';
    filterButtonsFunc();
    saveTasks();
}

function renderTaskList(newTasks=tasks){
    taskList.innerHTML='';

    newTasks.forEach((item,index,arr)=>{

        let li=document.createElement('li');
        li.innerHTML=`
        <span>${item.text}</span>
        <div>
            <button class='complete-button'>${item.completed?'Undo':'Complete'}</button>
            <button class='edit-button'>Edit</button>
            <button class='delete-button'>Delete</button>
        </div>
        `

        
        const completeButton=li.querySelector('.complete-button');
        const editButton=li.querySelector('.edit-button');
        const deleteButton=li.querySelector('.delete-button');

        completeButton.addEventListener('click',()=>{completeTask(index)});
        editButton.addEventListener('click',()=>{editTask(index,li)});
        deleteButton.addEventListener('click',()=>{deleteTask(index)});



        li.className=`task-item ${item.completed?'completed':''}`;
        taskList.append(li);
    })
}

function completeTask(index){
    tasks[index].completed=!tasks[index].completed;
    filterButtonsFunc();
    saveTasks();
}

function editTask(index,li){
    const span=li.firstElementChild;

    let input=document.createElement('input');
    input.type='text';
    input.value=tasks[index].text;
    input.focus();
    li.replaceChild(input,span);

    if(input.value){
        input.addEventListener('blur',()=>{
            tasks[index].text=input.value;
            filterButtonsFunc();
            saveTasks();
        })
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    filterButtonsFunc();
    saveTasks();
}

clearCompletedButton.addEventListener('click',()=>{clearCompleted()});

function clearCompleted(){
    taskList.innerHTML='';
    let updatedTasks=tasks.filter((item)=>{
        return !item.completed;
    })
    tasks=updatedTasks;
    filterButtonsFunc();
    saveTasks();
}

filterButtons.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.id=='all'){
            activeId='all';
        }
        else if(item.id=='active'){
            activeId='active';
        }
        else{
            activeId='completed';
        }
        filterButtonsFunc();
    });
})

function filterButtonsFunc(){
    

    if(activeId=='all'){
        renderTaskList();
        allFilterButton.className='active';
        activeFilterButton.className='';
        completedFilterButton.className='';
    }

    if(activeId=='active'){

        let newTasks=tasks.filter((item)=>{
            return !item.completed;
        });

        renderTaskList(newTasks);

        allFilterButton.className='';
        activeFilterButton.className='active';
        completedFilterButton.className='';
    }

    if(activeId=='completed'){
        let newTasks=tasks.filter((item)=>{
            return item.completed;
        });

        renderTaskList(newTasks);

        allFilterButton.className='';
        activeFilterButton.className='';
        completedFilterButton.className='active';
    }
}