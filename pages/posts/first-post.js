// import Link from 'next/link'
// import Head from 'next/head'


// export default function FirstPost() {
//   return (
//     <>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </>
//   )
// }


//Head section
// export default function FirstPost() {
//     return (
//       <>
//         <Head>
//           <title>First Post</title>
//         </Head>
//         <h1>First Post</h1>
//         <h2>
//           <Link href="/">
//             <a>Back to home</a>
//           </Link>
//         </h2>
//       </>
//     )
//   }

//Layout 
  import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}