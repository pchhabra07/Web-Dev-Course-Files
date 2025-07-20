import {useSelector, useDispatch} from 'react-redux'

import {changeToBlack, changeToBlue, changeToGreen, changeToRed} from '../slices/ColorSlice.jsx'

function Color(){
    const color=useSelector((state)=>state.color.value)

    const dispatch=useDispatch()

    return (
        <div>
            <span style={{color:color}}>This is the colored line.</span>
            <br/>
            <button onClick={()=>dispatch(changeToBlack())}>Change To Black</button>
            <br/>
            <button onClick={()=>dispatch(changeToBlue())}>Change To Blue</button>
            <br/>
            <button onClick={()=>dispatch(changeToGreen())}>Change To Green</button>
            <br/>
            <button onClick={()=>dispatch(changeToRed())}>Change To Red</button>
        </div>
    )
}

export default Color