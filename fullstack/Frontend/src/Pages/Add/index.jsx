import React, { useState } from 'react'
import Axios from 'axios'
import "./index.css"


const Add = () => {

  const url="http://localhost:3030/product"
  const [data, setData] = useState({
    name:"",
    image:"",
    category:"",
  })
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {

    name:data.name,
    category:data.category
    })
    .then(res=>{
      console.log(res.data);
    })
  }
  function handle(e){
const newdata = {...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata);
  }
  return (
    <>
      
      <div className='add-input__wrapper'>
      <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder="Name" />
            <input onChange={(e)=>handle(e)}  id="category" value={data.category} type="text" placeholder="category" />
            <button>add </button>
          </form>
      </div>
    </>
  )
}

export default Add