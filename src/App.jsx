import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const  [items, setItems] = useState([]);
  const [input,setInput] = useState(''); 

  const handleAddItem = () => {
    if(input.trim() !== ""){
      setItems([...items,input]);
      setInput('');
    }
  }

  const handleDeleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  }

  const handleUpdateItem = (index) => {
    const updateItem = prompt('Tahrir qilmoqchi bolgan itemni kiriting:', items[index])
    if(updateItem !== null && updateItem.trim() !== ''){
      const updateItems = items.map((item,i) => i === index ? updateItem : item);
      setItems(updateItems);
    }
  }

  

  return (
    <div className="App">
      <h1>React crud example</h1>
      <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} placeholder='Yangi item qoshish'/>
      <button onClick={handleAddItem}>Add item</button>

      <ul>
        {items.map((item,index) =>(
          <li key={index}>
             {item}
            <button onClick={() => handleUpdateItem(index)}>Update</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App