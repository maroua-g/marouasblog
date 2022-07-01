import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
   
  <brd className="border">
    <div className="container">
      <ul>
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/posts">Posts</a></li>
        <li><a href="http://localhost:3000/about">About</a></li>
     </ul>

      <Head>
        <title>Maroua's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

       <h1 className="title">
          Maroua's Blog
        </h1>

      <header className="header">

      <main>
       

        <h2>
          Started as a project, finished as a fun fact blog. Why don't you start by exploring the Post Index?
        </h2>

        <div className="grid">
          <a href="http://localhost:3000/posts" className="card">
            <h3>Post Index</h3>
            <p>Happy reading!</p>
          </a>
        </div>
      </main>

      </header>

      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 20px;
          padding: 0;
          overflow: hidden;
          background-color: #E1CD9F;
          width: 1500px;
        }
        
        li {
          float: left;
        }
        
        li a {
          display: block;
          color: #E7FBFC;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          width: 500px;
        }
        
        /* Change the link color to #111 (black) on hover */
        li a:hover {
          background-color: #B7EAEB;
        }
        
        .container {
          min-height: 90vh;
          padding: 0 0.rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          background-color: lightyellow;
          padding: 3rem;
        }

        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .border {
          margin: 5rem;
          padding: 20px;
          border-style: double;
          border-color: yellow;
          border-width: 10px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h2 {
          margin: 10px;
          color: #7CA3A3;
          width: 600px;
          text-align: center;
        }

        .title a {
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 2;
          font-size: 4rem;
        }
        
        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          min-width: 1000px;
          margin-top: 2rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 2rem;
          text-align: center;
          min-width: 300px;
          color: inherit;
          text-decoration: none;
          border: 2px solid #C6AE6E;
          border-radius: 30px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #7CA3A3;
          border-color: #B7EAEB;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  </brd>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
