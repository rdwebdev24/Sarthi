import React, { useRef } from 'react'

const ContactWhatsup = ({setShow,show}) => {
     const msgref = useRef()
     function send_handle(e){
          e.preventDefault()
          var win = window.open(`https://api.whatsapp.com/send?phone=${+91-8449864328}&text=${msgref.current.value}`);
         win.focus();
         setShow(!show)
        }
  return (
    <div className={`whatsup ${show?'show_whatsapp':""}`}>
      <form  className="whatsupform" onSubmit={send_handle}>
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
