import { useState, useCallback, useMemo } from 'react'
import Counter from '../components/Counter.jsx'
import './App.css'

function App() {
  const [count1, setCount1]=useState(0)
  const [count2, setCount2]=useState(0)

  function incrementCount1(){
    setCount1(count1+1)
  }

  function decrementCount1(){
    setCount1(count1-1)
  }

  function incrementCount2(){
    setCount2(count2+1)
  }

  function decrementCount2(){
    setCount2(count2-1)
  }

  const resetCount1=useCallback(()=>{
    setCount1(0)
  },[])

  function calcCubes(count){
    let sum=0;
    for(let i=1;i<=count;i++){
      sum+= i*i*i;  
    }
    console.log('calCubes called');
    return sum;
  }

  let sum=useMemo(calcCubes,[count1])

  return (
    <div>
      <span>Count1:{count1}</span>
      <br/>
      <span>Sum of Cubes of Count1:{sum}</span>
      <br/>
      <button onClick={incrementCount1}>Increment Count 1</button>
      <button onClick={decrementCount1}>Decrement Count 1</button>
      <br/><br/>

      <span>Count2:{count2}</span>
      <br/>
      <button onClick={incrementCount2}>Increment Count 2</button>
      <button onClick={decrementCount2}>Decrement Count 2</button>
      <br/><br/>

      <Counter resetCount1={resetCount1}/>
    </div>
  )
}
export default App

