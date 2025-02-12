import React from 'react'
import styles from './FooterStyles.module.css'
function Footer() {
  return (
    <div>
      <section id='footer' className={styles.container}>
        <p>&copy; 2025 Anshuman Majumder <br></br>
        All rights reserved.
        </p>
      </section>
    </div>
  )
}

export default Footer
