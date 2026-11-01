import Layout from '../components/Layout'
import PostList from '../components/PostList'
import { posts } from '../data/posts'
import styles from '../styles/Home.module.scss'

const Home = () => (
  <Layout title="blogblog">
    <section className={styles.hero} aria-labelledby="site-title">
      <div className={styles.opening}>
        <p className={styles.lede}>
          A small blog about building for the web: mobile first, accessible, unhurried.
        </p>
        <a href="#writing" className={styles.action}>
          Start reading
        </a>
      </div>
      <h1 id="site-title" className={styles.monument}>
        blogblog
      </h1>
    </section>

    <PostList posts={posts} />
  </Layout>
)

export default Home
