import React from 'react'
import styles from './ContactStyles.module.css'
export default function Contact() {
  return (
    <div>
      <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form action="">
      <div className='formGroup'>
        <label htmlFor="name" hidden>
            Name
        </label>
        <input type="text" name='name'id='name' placeholder='name' required />
      </div>
      <div className='formGroup'>
        <label htmlFor="email" hidden>
            Email
        </label>
        <input type="email" name='email'id='email' placeholder='email' required />
        </div>
        <div className='formGroup'>
        <label htmlFor="message" hidden>
            Message
        </label>
        <input type="textholder" name='message'id='message' placeholder='message' required />
        </div>
        <input type='submit' className='hover btn' value='Submit'></input>
      </form>
      </section>
    </div>
  )
}
