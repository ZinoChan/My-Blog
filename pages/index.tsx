import { createClient } from "contentful";
import { GetStaticProps } from "next";
import AllPosts from "../components/AllPosts";

import Hero from "../components/Hero";
import TopPost from "../components/TopPost";

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: res.items,
    },
    revalidate: 10,
  };
};

export default function Home({ posts }) {
  return (
    <div>
      <Hero posts={posts} />
      <TopPost posts={posts} />
      <AllPosts posts={posts} />
    </div>
  );
}
