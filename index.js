
//Idk what I did but it works

do{

    let message = ''
for(let user of users){
    message += `
    User id: ${user.id},  Name: ${user.name}, City:${user.address.city}`
}


alert(message)


let userInputId = Number(prompt(`Search toDo list for used id:`))
let userInputIdIndex;

for(let i=0;i< users.length;i++){
    if(users[i].id===userInputId){
        userInputIdIndex = i
    }
}

// debugger
if(confirm(`Add new toDo or show list of toDos?
Ok = New ToDo
Cancel = Show list` )){
    let titleOfToDo=prompt('Title of toDo:')
    todos.push({userId:userInputId,
    title:`${titleOfToDo}`,
    id:todos[todos.length-1].id+1
})
}
    let userInputIdTasks='';
    for(let task of todos){
        if(task.userId===userInputId){
            userInputIdTasks+='Task id ' + task.id + ': ' + task.title+'\n';
        }
    }
    alert(`${users[userInputIdIndex].username}'s tasks:
    ${userInputIdTasks}`);

if(confirm('Do you want to delete a task?')){
    let idToDelete= Number(prompt('Whats the id of the task you want to delete?'))
    for(const toDo of todos){
        if(toDo.id===idToDelete){
            todos.splice(todos.indexOf(toDo),1)
        }
    }
}

if(confirm('Do you want to modify a task?')){
    let idOfTaskToModify = Number(prompt('Whats the id of the task yu want to modify?'))
    for(let todo of todos){
        if(todo.id===idOfTaskToModify){
            todo.title=prompt('Enter new title for the task.')
        }
    }
}
userInputIdTasks='';
    for(let task of todos){
        if(task.userId===userInputId){
            userInputIdTasks+='Task id ' + task.id + ': ' + task.title+'\n';
        }
    }
    alert(`${users[userInputIdIndex].username}'s tasks:
    ${userInputIdTasks}`);
}while(confirm('Do u wanna keep going?'))
    

