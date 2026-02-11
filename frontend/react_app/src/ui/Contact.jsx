import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from 'react'
import styles from "./Contact.module.css"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"

const Contact = () => {
  
  const [author, setAuthor] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleContact =  async (e) => {
    e.preventDefault();

    try {
        const res = await api.post("notes/contact/",  {
            author,
            phone,
            email,
            message,
            });
        
            setAuthor("")
            setPhone("")
            setEmail("")
            setMessage("")
            console.log(res.data)
        
        alert("Message sent successfuly");
        navigate("/");
    } catch (err) {
        console.log(err.response?.data || err.message)
        alert("Error sending message")
    }
  }
  
  
  

    return (
  <>
  <Header />
  <div className={styles.contactContainer}>
     <div className={styles.contactWrapper}>
           <form onSubmit={handleContact}>
             <h2 className={styles.contactHeader}>Contact Us</h2>
     
             <textarea
             className={styles.contactName}
             placeholder="Name"
             value={author}
             onChange={(e) => setAuthor(e.target.value)}
             required
             />
            
     
             <textarea
             className={styles.contactPhone}
             type="number"
             placeholder="Phone"
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             required
             />
            
     
     
             <textarea
             className={styles.contactMail}
             type='email'
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             />
            
     
     
     
             <textarea
             className={styles.contactMessage}
             type='text'
             placeholder="Message"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             
             />
            
     
     
               
           <button type="submit" className={styles.contactBTN}>
             Send
           </button>
           </form>
          
           </div>
  </div>
  <Footer />
  </>
  )
}

export default Contact