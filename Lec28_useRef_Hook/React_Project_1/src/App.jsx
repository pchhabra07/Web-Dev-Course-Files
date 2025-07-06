import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [chipArr, setChipArr]=useState([])
  const inputRef=useRef(null)

  function addChip(){
    let chipValue=inputRef.current.value.trim()

    setChipArr([...chipArr, chipValue])
    inputRef.current.value=''
  }

  function closeChip(index){
    let chipsData=chipArr;
    chipsData=chipsData.filter((title,idx)=>{
      if(idx==index){
        return false;
      }
      return true;
    })
    setChipArr(chipsData)
  }

  function AppendChip({title,index,closeChipFunc}){
    return (
      <div className='chip'>
        <span>{title}</span>
        <button onClick={()=>{
          closeChipFunc(index)
        }}>X</button>
      </div>
    )
  }
  return (
    <div className="wrapper">
      <div className='container'>
        <h1 className='heading'>Chips Input</h1>
        <form className='form' onSubmit={(event)=>{
          event.preventDefault()
          addChip()
        }}>
          <input type="text" placeholder='Type a chip' className='chip-input' ref={inputRef}/>
        </form>
      </div>
      <div className="chips-container">
        {chipArr.map((val, idx)=>{
          return <AppendChip title={val} index={idx} closeChipFunc={closeChip} key={idx}/>
        })}
      </div>
    </div>
  )
}

export default App