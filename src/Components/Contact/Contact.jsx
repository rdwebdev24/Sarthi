import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='Contact container'>
    <div className="contact-container">
      <h1>Contact</h1>
      <form className='Form'>
          <div className="form-control">
               <label htmlFor="name">Name : </label>
               <input type="text" name="name" id="name" />
          </div>
          <div className="form-control">
               <label htmlFor="email">Email : </label>
               <input type="text" name="email" id="email" />
          </div>
          <div className="form-control"id='Contact-btn'>
              <a>Send</a>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
