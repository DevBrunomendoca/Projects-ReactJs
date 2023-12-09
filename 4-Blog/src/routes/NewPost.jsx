import blogFech from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./NewPost.css"

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const createPost = async(ev) => {
    ev.preventDefault()

    const post = {title, body, userId: 1}
    
    await blogFech.post("/posts", {
      body: post,
      
    })
    navigate("/")
    
  }

  
  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>
      <form onSubmit={(ev) => createPost(ev)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea 
            name="body" 
            id="body" 
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button className="btn" value="Eviar post">Criar post</button>
      </form>
    </div>
  )
}

export default NewPost