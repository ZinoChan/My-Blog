import { createClient } from "contentful";
import { GetStaticProps } from "next";
import About from "../components/About";
import AllPosts from "../components/AllPosts";

import Hero from "../components/Hero";
import TopPost from "../components/TopPost";

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const post = await client.getEntries({ content_type: "post" });
  const author = await client.getEntries({ content_type: "author" });

  return {
    props: {
      posts: post.items,
      author: author.items,
    },
    revalidate: 10,
  };
};

export default function Home({ posts, author }) {
  return (
    <div>
      <Hero posts={posts} />
      <TopPost posts={posts} />
      <AllPosts posts={posts} />
      <About author={author[0]} />
    </div>
  );
}
