import React from 'react'

function Todoitem({item}) {

    const {title,status,due_on}=item
    return (
        <div>
           <h1>Todo item</h1> 
           <h1>{title}</h1>
        </div>
    )
}

export default Todoitem
