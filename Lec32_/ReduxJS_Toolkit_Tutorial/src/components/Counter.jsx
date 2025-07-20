import {useSelector, useDispatch} from 'react-redux'

import {increment, decrement, reset} from '../slices/CounterSlice.jsx'

function Counter(){
    const count=useSelector((state)=>state.counter.value)

    const dispatch=useDispatch()

    return (
        <div>
            <span>Counter: {count}</span>
            <br/>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <br/>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <br/>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter