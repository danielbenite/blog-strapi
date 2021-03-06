import axios from "axios";
import Hero from "../components/Hero";
import LastNews from "../components/LastNews";


export default function Home(posts) {
  console.log(posts)
  return (
    <>
      <Hero posts={posts} />
      <LastNews posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const database = await axios.get('https://mysterious-river-92048.herokuapp.com/api/posts?populate=*');

  return {
    props: {
      posts: database.data
    },
    revalidate: 10,
  }
}