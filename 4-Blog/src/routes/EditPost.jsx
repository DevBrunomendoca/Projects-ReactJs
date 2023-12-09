import blogFech from "../axios/config"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const { id } = useParams()

  const getPosts = async () => {
    try {
      const response = await blogFech.get(`/posts/${id}`)
      const data = response.data
      setTitle(data.title)
      setBody(data.title)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPosts()
  }, [])

  const editPost = async(ev) => {
    ev.preventDefault()

    const post = { title, body, userId: 1}

    await blogFech.put(`/posts/${id}`, {
      body:post,
    })
  }


  return (
    <div className="new-post">
      <h2>Editado: {title}</h2>
      <form onSubmit={(ev) => editPost(ev)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea 
            name="body" 
            id="body" 
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
        </div>
        <button className="btn" value="Editar post">Editar post</button>
      </form>
    </div>
  )
}

export default EditPost