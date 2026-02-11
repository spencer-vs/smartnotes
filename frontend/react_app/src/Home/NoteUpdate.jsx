import React from 'react'
import styles from './NoteUpdate.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from "../api/axios"
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const NoteUpdate = () => {
 
   

  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    api.get(`notes/${id}/`)
    .then(res => {
     setTitle(res.data.title)
     setContent(res.data.content)
     setLoading(false)
    })
    .catch(err => {
        console.error('Failed to fetch note:', err)
        setLoading(false)
    })
  }, [id])


  const handleUpdate = () => {
  api.put(`notes/${id}/update/`, {
    title,
    content
  })
  .then(() => {
    alert('Note updated successfully')
    navigate('/')
  })
  .catch(err => {
    console.error('Failed to update note:', err)
  })
}
  
  if (loading) return <p>Loading...</p>
  
  
  return (
   <>
   <Header /> 
  
   <div className={styles.updateContainer}>
      
        <textarea 
        value={title}
        className={styles.updateTitle}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        />

        <textarea 
        value={content}
        className={styles.updateContent}
        onChange={(e) => setContent(e.target.value)}
        />
    
        <button className={styles.updateBtn} onClick={handleUpdate}>
          Update  
        </button>
    </div>
    <Footer />
     </>
  );

}

  

export default NoteUpdate