//importing from task file
import {addTask,getAllTasks,completeTask} from "./task.js"

//Adding a task
addTask("eating","high","2024-01-06")
//addTask("ms","low","2024-05-13")


//Displaying a task
let k=getAllTasks()
console.log(k)

//complete a task
completeTask("eating")

//Displaying all tasks
let k1=getAllTasks()
console.log(k1)



