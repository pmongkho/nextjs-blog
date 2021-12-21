import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'


// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    // ...
    return {
          props: {
             postData
            }
          }
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
import Layout from '../../components/layout'
import Head from 'next/head'

// export default function Post() {
//   return <Layout>...</Layout>
// }

// export default function Post({ postData }) {
//     return (
//       <Layout>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//       </Layout>
//     )
//   }

// export default function Post({ postData }) {
//     return (
//       <Layout>
//         <Head>
//         <title>{postData.title}</title>
//       </Head>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         <Date dateString={postData.date} />
//         <br />
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </Layout>
//     )
//   }
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }