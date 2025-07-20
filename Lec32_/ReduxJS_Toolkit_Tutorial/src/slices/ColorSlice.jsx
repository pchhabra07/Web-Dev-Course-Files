import {createSlice} from '@reduxjs/toolkit'

export const colorSlice=createSlice({
    name:'color',
    initialState:{
        value:'black'
    },
    reducers:{
        changeToRed:(state)=>{state.value='red'},
        changeToBlue:(state)=>{state.value='blue'},
        changeToGreen:(state)=>{state.value='green'},
        changeToBlack:(state)=>{state.value='black'}
    }
})

export const {changeToRed, changeToBlue, changeToGreen, changeToBlack}=colorSlice.actions

export default colorSlice.reducer