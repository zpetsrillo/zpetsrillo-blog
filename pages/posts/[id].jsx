import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>{' '}
        <hr style={{ height: '0.1rem', margin: '0 0 .5rem' }} />
        <div style={{ float: 'left' }} className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div style={{ float: 'right' }}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
