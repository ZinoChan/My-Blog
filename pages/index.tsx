import { createClient } from "contentful";
import { GetStaticProps } from "next";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";

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
  console.log(posts);
  return (
    <div>
      {/* <div className="grid grid-cols-5 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div> */}
      <Hero posts={posts} />
    </div>
  );
}
