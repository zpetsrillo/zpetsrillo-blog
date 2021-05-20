import Layout from '../components/layout'
import styles from '../styles/contact.module.css'

export default function contact() {
  return (
    <Layout>
      <h1>Contact me</h1>
      <form name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <div className={styles.grid}>
          <input
            className={styles.input}
            placeholder='name'
            type='text'
            name='name'
            required
          />

          <input
            className={styles.input}
            placeholder='email'
            type='email'
            name='email'
            required
          />
          <textarea
            className={styles.textarea}
            placeholder='message'
            name='message'
            required
          ></textarea>
        </div>
        <button style={{ marginTop: '2rem' }} type='submit'>
          Send
        </button>
      </form>
    </Layout>
  )
}
