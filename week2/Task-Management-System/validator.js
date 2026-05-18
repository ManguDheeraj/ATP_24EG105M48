// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
        if(!title){
            return "Required Title"
        }
        if(title.length<3){
            return "Min 3 chars"
        }
        return true
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority){
    const priorities=["low","medium","high"]
    let result=priorities.includes(priority)
    if(result===false){
        return "Invalid Priority"
    }
    return true
}

 // 3. Validate due date (must be future date)
function validateDueDate(date){
    let dueDate=new Date("2024-12-20") //yyyy-mm-dd
    let today=new Date()
    if(dueDate<today){
        return "Invalid"
    }
    return true
}

//exporting the functions
export {validateTitle,validatePriority,validateDueDate}
