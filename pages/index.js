import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
       {/* <Script src='sc.js' strategy='lazyOnload'></Script> */}
        <nav className={styles.mainnav}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>   
          Hunting Coder
        </h1>

        <p className={styles.description}>
          A blog for hunting Coders by A hunting Coder
        </p>
        <div className="blogs">
          
          <div className="blogItem">
            <h3>How to learn Javascript in 2022?</h3>
            <p>jJavascript is the language used to design logic for web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2022?</h3>
            <p>jJavascript is the language used to design logic for web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2022?</h3>
            <p>jJavascript is the language used to design logic for web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
