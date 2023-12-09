import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
   
   const [value, setValue] = useState("") 
   const [category, setCategory] = useState("") 
   

   const handleSubmit = (e) => {
      e.preventDefault()
      if(!value || !category) return
      addTodo(value, category)
      setValue("")
      setCategory("")
   }

   return (
   <div>
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
         <input 
            required
            type="text" 
            placeholder='Digite o título' 
            onChange={(e) => setValue(e.target.value)}
            value={value}
         />
         <select 
            required
            onChange={(e) => setCategory(e.target.value)}
            value={category}
         >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
         </select>
         <button type='submit'>Enviar tarefa</button>
      </form>
   </div>
   )
}

export default TodoForm