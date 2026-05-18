//importing the functions from validator file
import {validateTitle,validatePriority,validateDueDate} from "./validator.js"

//Adding the tasks in the array
const tasks=[] 

// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    if(!validateTitle() && !validatePriority() && !validateDueDate){
        return "Inavlid Task"
    }
    // If valid, add to tasks array
    tasks.push({title,priority,dueDate})
    // Return success/error message
    return true
}

 // 2. Get all tasks
function getAllTasks() {
     // Return all tasks
     return tasks
}

// 3. Mark task as complete
function completeTask(title) {
    // Find task and mark as complete
    let f=tasks.map(taskObj=>{
        if(taskObj.title===title){
            taskObj.status="completed"
        }
    })
    
}

export {addTask,getAllTasks,completeTask}



