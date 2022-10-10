import React from "react";
import {useState} from 'react'
import "./../styles/App.css";

function App(){
	const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const[editId, setEditId] = useState(0);
  const handleInput = (e)=>{
       const input = e.target.value;
       setInput(input);
  }
  const handleAdd = (e)=>{
    e.preventDefault();
    if(input!==""){
      setData([{id: `${input}-${Date.now()}`, input}, ...data])
      setInput("");
    }
  }
  const handleEdit = (id)=>{
    const editData = data.find((i)=>i.id ===id);
    setInput(editData.input);
    setEditId(id);
    
  }
  const handleDel = (id)=>{
    const delData = data.filter((e)=>e.id !==id);
    setData([...delData]);
  }
	return (
	<div id="main">
	<input id = "task" type = "text" value = {input} onChange = {handleInput}/>
      <button id = "btn" type = "submit" onClick = {handleAdd}>Add</button>
     <ul>
        {data.map((t)=>(  
  
         <li className = "list"><span key = {t.id}>{t.input}</span>
             <button id = "edit" onClick = {()=>handleEdit(t.id)}>Edit</button>
             <button id = "del" onClick = {() =>handleDel(t.id)}>Del</button>
         </li>
        ))}
	</ul>    
       
	</div>
	);
}


export default App;
