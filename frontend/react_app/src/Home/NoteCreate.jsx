import React from 'react'
import { useEffect, useState } from 'react'
import api from "../api/axios"
import styles from "./NoteCreate.module.css"
import { useNavigate } from 'react-router-dom'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

const NoteCreate = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


 const createNote = () => {
    if(!title.trim() || !content.trim()){
      alert("Title and content are required")
      return
    }

    api.post('notes/', {
      title: title,
      content: content
    })
    .then(res => {
      setTitle('')
      setContent('')
      alert('Note created successfully')
      navigate('/')
    })
    .catch(err => {
      console.error('Failed to create note:', err)
    })
   
  }

  

  




  return (
    <div>
         <Header /> 
         <div className={styles.createContainer}>
          
        
        <textarea
          type="text"
          className={styles.createTitle}
          placeholder="Write Your Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
         
         ></textarea>


        <textarea
          type="text"
          className={styles.createText}
          placeholder="Write Your Notes Here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
         
         ></textarea>
        <button className={styles.createBtn} onClick={createNote}>
          Create
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default NoteCreate