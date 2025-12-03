import "./ContactUsStyles.css"

import React from 'react'

const ContactUs = () => {
  return (
    <div className="form-container">
        <h1>
            Send a message to Us
        </h1>

        <form action="">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Subject"/>
       <textarea placeholder="Message" rows="4"  name="" id=""></textarea>
        <button>Send</button>
        </form>
    </div>
  )
}

export default ContactUs