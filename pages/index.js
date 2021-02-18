import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blogblog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to blogblog!
        </h1>

        <h2 className={styles.description}>
          NextJS + React + Vercel
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

      <footer className={styles.footer}>
        <a href="#!" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
