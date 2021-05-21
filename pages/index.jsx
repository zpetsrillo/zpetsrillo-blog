import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <hr />
        <p>
          I'm a self starter and lifelong learner with a tenacity for solving
          coding challenges. Current topics I'm learning are full stack
          development, blockchain, and artificial intelligence.
        </p>
        <p>
          I'm open to collaborating on interesting projects or business
          oportunities.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <Link href='/contact'>
            <div style={{ flexGrow: '1' }}>
              <button>Contact me</button>
            </div>
          </Link>
          <a
            href='https://www.linkedin.com/in/zpetsrillo/'
            style={{ height: '48px' }}
          >
            <Image src='/images/linkedin-logo.png' width={48} height={48} />
          </a>
          <a
            href='https://github.com/zpetsrillo'
            style={{ height: '48px', marginLeft: '1rem' }}
          >
            <Image src='/images/GitHub-Mark-64px.png' width={48} height={48} />
          </a>
        </div>
        <hr />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.headingLg}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
