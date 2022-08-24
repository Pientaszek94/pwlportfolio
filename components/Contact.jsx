import styles from './Contact.module.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AMaps from './parts/AMaps'

function Contact() {

    const [form, setForm]=useState({name:"", email:"", subject:"", message:""});
    const [sent, setSent]=useState(false);

    const sendEmail= (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_qy5sh3e', 'template_hbm1kyd', e.target, 'r4TyEcwLicH-kPcPe')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setSent(true);
          e.target.reset();
    }

    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }

  return (
    <div className={styles.contact}>

                {
                    !sent?(
                        <div className={styles.form}>
                        <p>
                            You can write me message anytime, if you want, and I will reply you as soon as I can.
                            Can&apos;t wait to solve your problem!
                        </p>
                            <form onSubmit={sendEmail}>
        
                                    <div className={styles.inputs}>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Name' />
                                    
                                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        
                                    </div>
                                    
                                    
                                    <textarea name="subject" value={form.subject} onChange={handleChange} placeholder="Subject"/>
                                   
                                    <textarea name="message" value={form.message} onChange={handleChange} placeholder='Message' />
        
                                    {form.name!==""&&form.email!==""&&form.subject!==""&&form.message!==""?(

                                    <div className={styles.submit}>
                                        <div className={styles.submitcon}>
                                                <div className={styles.flare}></div>
                                        </div>
        
                                        <button type="submit" className={styles.string} >Send Message</button>
        
                                        
                                    </div>

                                    ): null}
        
        
                            </form>
                        </div>
                    ): (<div>
                            <h3 className={styles.message}>
                                You have just sent me a message.
                                Thank you!
                            </h3>
                    </div>)
                }
              
                <div className={styles.map}>
                {/* <AMaps/> */}
                <h3>We can even make an appointment using this number: <br/> +48 123 456 789</h3>
                </div>
    </div>
  )
}

export default Contact