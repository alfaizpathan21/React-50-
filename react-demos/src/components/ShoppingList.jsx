import React, { useState } from 'react'

const ShoppingList = () => {

    const [item,setItems]=useState([])
    const [name,setName]=useState('')
    const [quantity,setQauntity]=useState('')


    const handleSubmit =e=>{
        e.preventDefault()

        if(!name || !quantity) return;

        const newitem={
            name,
            quantity:parseInt(quantity)

        }
        setItems((previtems)=>[...previtems,newitem])
        setName("")
        setQauntity("")
    }

  return (
    <div>
      <h1>Shopping List</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Item Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder='Item Qauntity' value={quantity} onChange={(e)=>setQauntity(e.target.value)} />

        
        <button type='submit'>Add Item</button>

      </form>
      <ul>
        {item.map((item,index)=>(
            <li key={index}>
                {item.name}-Qauntity:{item.quantity}
            </li>

        )
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
