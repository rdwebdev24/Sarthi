import React, { useRef } from 'react'

const ContactWhatsup = ({setShow,show}) => {
     const nameref = useRef()
     const msgref = useRef()
     function send_handle(e){
          e.preventDefault()
          var win = window.open(`https://wa.me/${+91-8449864328}?text=I%27m%20api%20msg%20hello%20${nameref.current.value}%20friend%20${msgref.current.value}`);
         win.focus();
         setShow(!show)
        }
  return (
    <div className={`whatsup ${show?'show_whatsapp':""}`}>
      <form  className="whatsupform" onSubmit={send_handle}>
          <div className="form-control">
               <label htmlFor="name">Name : </label>
               <input ref={nameref} type="text" name="" id="name" />
          </div>
          <div className="form-control">
               <label htmlFor="msg">Message : </label>
               <textarea ref={msgref} type="text" name="" id="msg" />
          </div>
          <button className="btn btn-success send">Send</button>
      </form>
    </div>
  )
}

export default ContactWhatsup
