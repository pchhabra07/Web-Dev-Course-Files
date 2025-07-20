import {memo} from 'react'

const Counter= memo((props)=>{

    const {resetCount1}=props;

    return (
        <div>
            {console.log('Counter component re-rendered...')}
            <button onClick={resetCount1}>Reset Counter 1</button>
        </div>
    )
})

export default Counter;