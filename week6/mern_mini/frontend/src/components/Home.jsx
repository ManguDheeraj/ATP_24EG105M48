import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"
import { useCounterStore } from "../store/CounterStore.js"

function Home() {
  let {newCounter,incrementCounter,decrementCounter}=useCounterStore()

  const {counter,changeCounter}=useContext(counterContextObj)
  const {counter1,changeCounter1}=useContext(counterContextObj)

  return (
   <div>
     <div>
      <h1>Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-400 p-5">Change</button>
    </div>
    <div>
      <h1>Counter: {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-blue-400 p-5 border-3">New Increment</button>
      <button onClick={decrementCounter} className="bg-blue-400 p-5 border-3">New Decrement</button>
    </div>
     <div>
      <h1>Counter1: {counter1}</h1>
      <button onClick={changeCounter1} className="bg-amber-400 p-5">Change</button>
    </div>
   </div>
  )
}

export default Home