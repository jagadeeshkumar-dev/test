import React,{useEffect,useState} from 'react'
import axios from 'axios'

import Todoitem from './Todoitem'
function Todo() {

    const [Todo,settodo]=useState([])

    

    useEffect(() => {
  
     const fetch=async()=>{
  
         const res=await axios('https://gorest.co.in/public/v1/todos')
  
         console.log(res.data)
         settodo(res.data)
     }
        
  fetch()
    }, [])
  
    return (
        <div>
            <h1>todo grid</h1>

               
        </div>
    )
}

export default Todo
