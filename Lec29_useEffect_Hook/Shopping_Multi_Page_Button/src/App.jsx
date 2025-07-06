import { useState } from 'react'
import './App.css'

const dummyDataURL='https://dummyjson.com/products?limit=200'
let dummyData={};
async function getData(){
  try{
    dummyData= await axios.get(dummyDataURL);
    console.log(dummyData.data.products);
  }
  catch(err){
    console.log("Dummy data fetch error: ", err);
  }
}
getData();

function App() {


  return (
    <div className='page-wrapper'>
      <h1 className=''>Products</h1>
      {}
    </div>
  )
}

export default App
