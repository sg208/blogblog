import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blogblog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main-container" className={styles.skiptomain}>Skip to main content</a>

      <main className={styles.main} id="main-container" role="main">
        <h1 className={styles.title}>
          Welcome to blogblog!
        </h1>

        <h2 className={styles.description}>
          NextJS + React + SASS + Vercel
        </h2>

        <div className={styles.grid}>
          <a href="#!" className={styles.card}>
            <h3>Post 1 &rarr;</h3>
            <p>Description 1</p>
          </a>

          <a href="#!" className={styles.card}>
            <h3>Post 2 &rarr;</h3>
            <p>Description 2</p>
          </a>

          <a href="#!" className={styles.card}>
            <h3>Post 3 &rarr;</h3>
            <p>Description 3</p>
          </a>

          <a href="#!" className={styles.card}>
            <h3>Post 4 &rarr;</h3>
            <p>Description 4</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer} role="contentinfo">
        <a href="https://github.com/sg208" target="_blank" rel="noopener noreferrer">
          Made with love by github.com/sg208
        </a>
      </footer>
    </div>
  )
}
