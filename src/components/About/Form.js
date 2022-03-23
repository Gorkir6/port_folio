import React,{useRef} from "react";
import emailjs from '@emailjs/browser'
function Form(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9xum60r', 'template_s9e3yc4', form.current, 'vWpm-6UCMQSXPX44U')
        .then((result) => {
          alert("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Enter your name" />
        <input type="email" name="user_email" placeholder="Enter your email"/>
        <textarea name="message" placeholder="Enter your message"/>
        <input type="submit" value="Send" />
      </form>
    )
}

export default Form