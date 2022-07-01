import Head from 'next/head'
import clientPromise from "../lib/mongodb";

export default function Posts({ posts }) {
  return (
    <div>

      <Head>
        <title>MBlog: Post Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
          <a href="http://localhost:3000" className="card">
            <h3>Home</h3>
          </a>
        </div>

      <ul>
        {posts.map((post) => (
          <li>
            <h2>{post.title}</h2>
              <h3>By: {post.author}</h3>
                <p>{Date(post.date).substring(0, Date(post.date).indexOf(' ', 14))}</p>
                <p>{post.para}</p>
                <p className="facts">
                {post.itemo} {post.itemt} {post.itemth}
                </p>
          </li>
        ))}
      </ul>
  
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

          li {
            margin: 5rem;
            max-width: 1000px;
            flex-basis: 45%;
            padding: 3rem;
            align-items: left;
            text-align: left; 
            color: inherit;
            border: 3px solid #C6AE6E;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
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
    .collection("entry")
    .find({})
    .limit(3)
    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}