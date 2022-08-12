import styles from './Contact.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Maps from './parts/Maps';
import AMaps from './parts/AMaps';

function Contact() {

    const [form, setForm]=useState({});

    const [sent, setSent]=useState(false);

    const sendEmail= (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_qy5sh3e', 'template_hbm1kyd', form, 'r4TyEcwLicH-kPcPe')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setSent(true);
          e.target.reset();
    }

    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }


console.log(form)
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
                                        <input type="text" name="name" placeholder='Name' onChange={handleChange}/>
                                    
                                        <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
        
                                    </div>
                                    
                                    
                                    <textarea name="subject" placeholder="Subject" onChange={handleChange}/>
                                   
                                    <textarea name="message" placeholder='Message' onChange={handleChange}/>
        
        
                                    <div className={styles.submit}>
                                        <div className={styles.submitcon}>
                                                <div className={styles.flare}></div>
                                        </div>
        
                                        {/* <button type="submit" className={styles.string}>Send Message</button> */}
        
                                        
                                    </div>
                                    <button type="submit">Send Message</button>
        
                            </form>
                        </div>
                    ): (<div>
                            <h3 className={styles.message}>
                                You have just sent a message to me.
                                Thank you!
                            </h3>
                    </div>)
                }
              
                <div className={styles.map}>
                    {/* <Maps/> */}
                    <AMaps/>
                </div>
    </div>
  )
}

export default Contact