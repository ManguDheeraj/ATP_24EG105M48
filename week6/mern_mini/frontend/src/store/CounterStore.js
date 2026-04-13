import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:10,
    //add user state (name,age,email)
    user:{name:"alpha",email:"alpha@gmail.com",age:"19"},
    //function to change email
    changeEmail:()=>set({...user,email:"test@gmail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"test",age:23}),
    //functioons to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
    setTo500:()=>({newCounter:500}),
    //function to decrement newCounter by 20
    decrementCounterBy20:()=>set(state=>({newCounter1:state.newCounter1-20}))
}))