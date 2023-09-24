import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'> Lets Talk About Everything!</h3>
          <p className='contact__details'>Dont Like Forms? Send Me an Email. 👋</p>
        </div>

        <form action='' className='contact__form'>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input type='text' className='contact__form-input' placeholder='Your Good Name Here !'/>
            </div>
            
            <div className='contact__form-div'>
              <input type='email' className='contact__form-input' placeholder='Insert Your Email'/>
            </div>
          </div>

          <div className='contact__form-div'>
              <input type='text' className='contact__form-input' placeholder='I have an IDEA !'/>
            </div>

            <div className='contact__form-div contact__form-area'>
              <textarea name='' id='' cols={30} rows={10} className='contact__form-input' placeholder='Chetan, Lets Grow Together !?'></textarea>
            </div>
             <button className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact