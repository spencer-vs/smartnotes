import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from './Carousels.module.css'
import header_1 from "../assets/img/header_1.png"
import header_2 from "../assets/img/header_2.png"
import create from "../assets/img/create.png"
import footer from "../assets/img/footer.png"
import home from "../assets/img/home.png"
import login from "../assets/img/login.png"
import signup from "../assets/img/signup.png"
import update from "../assets/img/update.png"
import menu from "../assets/img/menu.png"
import search from "../assets/img/search.png"
import logo from "../assets/img/logo.png"


const Carousels = () => {

  const images = [
    {
    id: 102,
    src: header_1, 
    alt: "Header",
    description: "SmartNotes a modern notes app powered by Django and React"
  },
  {
    id: 102,
    src: header_2, 
    alt: "Header",
    width: 4320,
    height: 3240,
    "description": "SmartNotes has important features such as create, delete and update"
  },
  {
    id: 102,
    src: signup, 
    alt: "Sign Up",
    width: 4320,
    height: 3240,
    "description": "Create an account and customise your notes"
  },
  {
     id: 102,
    src: login, 
    alt: "Login",
    width: 4320,
    height: 3240,
    "description": "Login and view your customised notes"
  },
  {
    id: 102,
    src: menu, 
    alt: "Menu",
    width: 4320,
    height: 3240,
    "description": "Navigation made easy with a state of the art menu."
  },
  {
    id: 102,
    src: home, 
    alt: "Home",
    width: 4320,
    height: 3240,
    "description": "Access your notes with ease from the homepage"
  },
  {
     id: 102,
    src: create, 
    alt: "Create",
    width: 4320,
    height: 3240,
    "description": "Click the plus button to create your notes."
  },
  {
    id: 102,
    src: update, 
    alt: "Update",
    width: 4320,
    height: 3240,
    "description": "Click the update button to make unlimited changes to your notes."
  },
  {
    id: 102,
    src: search, 
    alt: "Search",
    width: 4320,
    height: 3240,
    "description": "Click the search button to find any note of your choice"
  },
  {
    id: 102,
    src: logo, 
    alt: "Logo",
    width: 4320,
    height: 3240,
    "description": "Thank you for accessing notes courtesy of your developer"

  }
  ]


  return (
    <div>
        



         
  


       <Carousel className={styles.crsl} 
        autoPlay 
        infiniteLoop 
        interval={5000}
        showThumbs={false}
        //showStatus={false}
        //showIndicators={false}
       
        >
          
            {/* { images.map(image=> <img src={image.download_url} alt={image.author} />) } */}


            {images.map(image => (
              <div key={image.id} className={styles.slide}>
                <img src={image.src} alt={image.alt} />

                <div className={styles.caption}>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}



         
         
        </Carousel> 





    </div>
  )
}

export default Carousels