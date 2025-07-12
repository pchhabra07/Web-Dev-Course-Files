import { useState, useRef, useEffect } from 'react'
import './App.css'
import Card from './Card.jsx'

const maxSizePerPage=10

function App() {
  const [productsData, setProductsData]=useState([])
  const [searchBarInput, setSearchBarInput]=useState('')
  const [currentPage, setCurrentPage]=useState(0)
  const searchBarRef=useRef(null)
  
  const noOfPages=Math.ceil(productsData.length/maxSizePerPage)
  const pageNumbers=[...Array(noOfPages).keys()]
  const startIndex=currentPage*maxSizePerPage;
  const endIndex=startIndex+maxSizePerPage-1;


  async function getData(){
    const dummyDataURL=`https://dummyjson.com/products/search?limit=200${searchBarInput?`&q=${searchBarInput}`:''}`
    try{
      let dummyData= await axios.get(dummyDataURL);
      setProductsData(dummyData.data.products)
    }
    catch(err){
      console.log("Dummy data fetch error: ", err);
    }
  }

  function searchInputUpdate(){
    setSearchBarInput(searchBarRef.current.value)
  }

  useEffect(()=>{
    console.log('re-fetching data')
    getData();
    //No need for cleanup because we use it to reverse the previous actions like disconnecting the server, etc.
  },[searchBarInput])

  return (
    <div className='page-wrapper'>
      <h1 className='heading'>Products</h1>
      
      <form className='search-form' onSubmit={(event)=>{
        event.preventDefault()
        searchInputUpdate()
      }}>
        <input type="text" name="search-box" className='search-box' placeholder='Search'ref={searchBarRef} />
        <button type="submit" className='search-button'>Search</button>
      </form>

      <div className="page-buttons">
        {pageNumbers.map((item,idx,arr)=>{
          return (
            <button className={`page-button ${item==currentPage?'active':''}`} key={idx} onClick={()=>{
              setCurrentPage(item)
            }}>
              {item}
            </button>
          )
        })}
      </div>

      <div className="products">
        {productsData.slice(startIndex,endIndex+1).map((item, idx, arr)=>{
          return (
            <Card title={item.title} imageLink={item.images[0]} key={idx} />
          )
        })}
      </div>
    </div>
  )
}

export default App
