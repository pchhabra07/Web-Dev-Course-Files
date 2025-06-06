const express=require('express')
const fs=require('fs/promises')
const app=express()

const port=3000;

const path=require('path');
const publicPath=path.join(__dirname,'public');

app.use(express.json())


//Get Tasks API from script.js
app.get('/tasks', (req,res)=>{
    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
        .then(data=>{
            const tasks=JSON.parse(data);
            res.send(tasks);
        })
        .catch(err=>{
            console.error('Error reading tasks:',err);
            res.status(500).send('Internal Server Error');
        });
})

//Post Tasks API to bring updates and changes in tasks array from script.js and update in tasks.json
app.post('/tasks/add',(req,res)=>{
    let newText=req.body.text;
    let newCompleted=req.body.completed;
    let newTasks=[];

    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
        .then(data=>{
            newTasks=JSON.parse(data);
            newTasks.push({text:newText,completed:newCompleted});
            return fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(newTasks));
        })
        .then(()=>{
            res.status(200).send('New Task added successfully');
        })
        .catch(err=>{
            console.error('Error adding new task',err);
            res.status(500).send('Internal Server Error');
        })
})



app.post('/tasks/delete',(req,res)=>{
    let deleteIdx=req.body.idx;
    let newTasks=[];

    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
        .then(data=>{
            newTasks=JSON.parse(data);
            newTasks.splice(deleteIdx,1);
            return fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(newTasks));
        })
        .then(()=>{
            res.status(200).send('Task deleted successfully');
        })
        .catch(err=>{
            console.error('Error deleting task',err);
            res.status(500).send('Internal Server Error');
        })

})

app.post('/tasks/edit',(req,res)=>{
    let editIdx=req.body.idx;
    let newText=req.body.text;
    let newTasks=[];

    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
        .then(data=>{
            newTasks=JSON.parse(data);
            newTasks[editIdx].text=newText;
            return fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(newTasks));
        })
        .then(()=>{
            res.status(200).send('Task deleted successfully');
        })
        .catch(err=>{
            console.error('Error deleting task',err);
            res.status(500).send('Internal Server Error');
        })

})

app.post('/tasks/completeTask',(req,res)=>{
    let completeIdx=req.body.idx;
    let newTasks=[];

    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
        .then(data=>{
            newTasks=JSON.parse(data);
            newTasks[completeIdx].completed=!newTasks[completeIdx].completed;
            return fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(newTasks));
        })
        .then(()=>{
            res.status(200).send('Task deleted successfully');
        })
        .catch(err=>{
            console.error('Error deleting task',err);
            res.status(500).send('Internal Server Error');
        })

})

app.post('/tasks/clear-completed',(req,res)=>{
    let completeIdx=req.body.idx;
    let newTasks=[];

    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
        .then(data=>{
            newTasks=JSON.parse(data);
            newTasks = newTasks.filter((task)=>{
                return (task.completed==false)
            })
            return fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(newTasks));
        })
        .then(()=>{
            res.status(200).send('Task deleted successfully');
        })
        .catch(err=>{
            console.error('Error deleting task',err);
            res.status(500).send('Internal Server Error');
        })

})

app.use(express.static(publicPath))

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port} ...`);
})