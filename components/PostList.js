import { formatDate } from '../data/posts'
import styles from '../styles/PostList.module.scss'

const PostList = ({ posts }) => {
  const postCountLabel = posts.length === 1 ? '1\u00a0post' : `${posts.length}\u00a0posts`

  return (
    <section id="writing" tabIndex={-1} className={styles.section} aria-labelledby="writing-title">
      <div className={styles.intro}>
        <h2 id="writing-title" className={styles.title}>
          Writing
        </h2>
        <p className={styles.summary}>
          Short essays on building for the web. {postCountLabel}, newest first.
        </p>
      </div>

      <ul className={styles.list}>
        {posts.map((post, index) => (
          <li key={post.slug} className={styles.item} style={{ '--index': index }}>
            <article className={styles.post}>
              <h3 className={styles.postTitle}>
                <a href={post.href} className={styles.link}>
                  {post.title}
                </a>
              </h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <p className={styles.meta}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true"> · </span>
                <span>{post.readingMinutes} min read</span>
              </p>
              <span className={styles.arrow} aria-hidden="true">
                &rarr;
              </span>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PostList
