import { createClient } from "contentful";
import { GetStaticProps } from "next";
import BlogCard from "../components/BlogCard";

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
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-5 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
}
