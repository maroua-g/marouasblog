import Head from 'next/head'
import clientPromise from "../lib/mongodb";

export default function Posts({ posts }) {
  return (
    <div>
      
      <Head>
        <title>MBlog: About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
          <a href="http://localhost:3000" className="card">
            <h3>Home</h3>
          </a>
        </div>

        <h1 className="title">
            About Me
        </h1>

    {posts.map((post) => (
        <div className="para">
            <h3>{post.author}</h3>
              <p>{post.abme}</p>
              <p>{post.what}
              {post.why}</p>
              <p>{post.close}</p>
            <h4>{post.sig}</h4>
        </div>
    ))}

        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
          }
  
          .home {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            color: #C6AE6E;
            background-color: lightyellow;
            max-width: 2000px;
            margin-top: 1rem;
          }
           .title {
            margin: 4rem;
            align-items: center;
            text-align: center; 
            color: #7CA3A3;
            padding-left: rem;
           }
  
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1rem;
            align-items: center;
            text-align: center;
            color: inherit;
            border: 3px solid #C6AE6E;
            border-radius: 10px;
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
            font-size: 3rem;
          }
  
          .card p {
            margin: 0;
            font-size: 2rem;
            line-height: 1;
          }

          .para {
            margin-left: 26rem;
            max-width: 900px;
            flex-basis: 45%;
            padding: 3rem;
            padding-left: 8rem;
            align-items: center;
            text-align: left; 
            color: inherit;
            background-color: lightyellow;
            border: 3px solid #B7EAEB;
            border-radius: 20px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          p {
            margin: 2rem;
            max-width: 1000px;
            align-items: center;
            text-align: left; 
            color: inherit;
            padding-left: rem;
          }

          .facts {
            border-left: 10px lightblue
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
  );
}

export async function getServerSideProps() {
  const client = await clientPromise
  const db = client.db("posts")
  const posts = await db
    .collection("about")
    .find({})
    .limit(1)
    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}