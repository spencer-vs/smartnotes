import React from 'react'
import Header from './Header'
import styles from './Features.module.css'
import header_1 from "../assets/img/header_1.png"
import header_2 from "../assets/img/header_2.png"
import create from "../assets/img/create.png"
import footer from "../assets/img/footer.png"
import home from "../assets/img/home.png"
import login from "../assets/img/login.png"
import signup from "../assets/img/signup.png"
import update from "../assets/img/update.png"
import Footer from "../ui/Footer"
import menu from "../assets/img/menu.png"
import search from "../assets/img/search.png"
import contact from "../assets/img/contact.png"

const Features = () => {
  return (
    <div>
        <Header />
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>Site Features</div>
          
          <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Header Component</h1>
            <div className={styles.firstImage}>
              <img src={header_1} alt="Feature 1" className={styles.img_1} />
              <img src={header_2} alt="Feature 1" className={styles.img_1} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The header component is made up of two parts, the first shows a header for the logged out user, while the second shows a header for the logged in user with both having excellent slide shows that describe the various features of the app</p>
            </div>
          </div>



           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Sign Up Component</h1>
            <div className={styles.firstImage}>
              <img src={signup} alt="Sign Up" className={styles.img_2} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The Sign Up component consist of input fields for username, password, phone number and email, after succesfully fill this information, the user will immediately be redirected to the login component where they can immediately log in and write their own customised note</p>
            </div>
          </div>




           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Login Component</h1>
            <div className={styles.firstImage}>
              <img src={login} alt="Login" className={styles.img_3} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The login component is one of the most exciting features of this app, it allows users to access their own customised and personalised notes given users absolute privacy</p>
            </div>
          </div>


          
          <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Menu Component</h1>
            <div className={styles.firstImage}>
              <img src={menu} alt="Menu" className={styles.img_4} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The menu component is the go to naviagtion system on the site, with a couple of clicks users can access any page on the site.</p>
            </div>
          </div>




           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Notes Component</h1>
            <div className={styles.firstImage}>
              <img src={home} alt="Notes" className={styles.img_4} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The home component is the nexus of this app, it contains all user notes with buttons that allows for deleting notes and updating notes</p>
            </div>
          </div>



           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Create Component</h1>
            <div className={styles.firstImage}>
              <img src={create} alt="Create" className={styles.img_5} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The create component serves as perhaps the most important component, with a single click of the plus icon users can be able to create as much notes as they want which will be displayed at both frontend and backend</p>
            </div>
          </div>




           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Update Component</h1>
            <div className={styles.firstImage}>
              <img src={update} alt="Update" className={styles.img_6} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The update component is just like the create component difference been that it allows for the editing of already created notes</p>
            </div>
          </div>



          <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Search Component</h1>
            <div className={styles.firstImage}>
              <img src={search} alt="Search" className={styles.img_4} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>No notes app is complete without a search function, by typing words from their notes in the search box users can access notes with the correspondant words making it easy to find old notes.</p>
            </div>
          </div>



           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Contact Component</h1>
            <div className={styles.firstImage}>
              <img src={contact} alt="Contact" className={styles.img_4} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The contact component can be used by users to send a direct message to the developer via the Django admin panel.</p>
            </div>
          </div>



           <div className={styles.firstFeature}>
            <h1 className={styles.firstHeader}>Footer Component</h1>
            <div className={styles.firstImage}>
              <img src={footer} alt="Footer" className={styles.img_7} />
            </div>
            <div className={styles.firstText}>
              <p className={styles.p_1}>The footer provides important imformation about the site such as developer info and sitemap allowing for seamless navigation</p>
            </div>
          </div>




           



           



           



           
        
        
        
        </div>
        <Footer />
    </div>
  )
}

export default Features
