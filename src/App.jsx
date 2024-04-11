import { useReducer, useState } from 'react'
import HttpReq from './HttpReq';
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "Increase":
      return {...state, number: state.number + 1 }
    case "IncreaseincreseByAmountHandler":
      return {...state, number: state.number + parseInt(action.payload) }
    case "resetHandler":
      return {...state, number: state.number = 1 }
    case "decresecreaseHandler":
      return {...state, number: state.number - 1 }
    case "upHandler" :
      return {...state,count : state.count +1}


  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { number: 1, count: 0 })
  const [countValue, setCountValue] = useState("")
  const increseHandler = () => {
    dispatch({ type: "Increase" })
  }
  const increseByAmountHandler = (value) => {
    dispatch({ type: "IncreaseincreseByAmountHandler", payload: value })
  }
  const resetHandler = () => {
    dispatch({ type: "resetHandler" })
  }
  const decresecreaseHandler = () => {
    dispatch({ type: "decresecreaseHandler" })
  }
  const upHandler = () => {
    dispatch({ type: "upHandler" })
  }

  return (
    <>
      {/* <div>
        <h1>{state.number}</h1>
        <h1>{state.count}</h1>
        <input type="number" value={countValue} onChange={(event) => setCountValue(event.target.value)} />
        <button onClick={() => increseByAmountHandler(countValue)}>IncreaseByAmount</button>
        <button onClick={increseHandler}>Increase</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decresecreaseHandler}>Decresecrease</button>
        <button onClick={upHandler}>Up</button>
      </div> */}
      <HttpReq />
    </>
  )
}

export default App
