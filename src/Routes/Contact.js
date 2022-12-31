import React from 'react'
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Jack from '../Components/Jack';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <div>
<Navbar/>
        <Jack 
        cName='Jack-ya'
        JackImg='./Images/Contact.jpg'
        title='Contact'
        bntClass='Contact'
        />
        <ContactForm/>
            <Footer/>
    </div>
  )
}

export default Contact;