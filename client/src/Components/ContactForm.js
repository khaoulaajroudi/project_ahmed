import React from 'react'
import "./ContactStyle.css"

const ContactForm = () => {
  return (
    <div className='contact'>
        <h1>Send A Message To Us!</h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Message' rows={4}></textarea>
            <button>Send Message</button>

        </form>
    </div>
  )
}

export default ContactForm