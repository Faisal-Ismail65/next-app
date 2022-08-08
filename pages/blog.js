import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const blog = () => {
  return (
    <main className={styles.main}>
    <div className="blogs">
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn javascript'}><h3>How to learn Javascript in 2022?</h3></Link>
            <p>Javascript is the language used to design logic for web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for web</p>
          </div>
        </div>
        </main>
  )
}

export default blog