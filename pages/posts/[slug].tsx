import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "post" });

  const paths = res.items.map((item: any) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: items[0],
    },
    revalidate: 10,
  };
};

const PostDetail = ({ post }) => {
  if (!post) return <div>loading...</div>;
  const { title, featuredImage, topics, readingTime, postDetails } =
    post.fields;
  return (
    <div className="max-w-screen-md text-center mx-auto py-6">
      <Image
        src={`https:${featuredImage.fields.file.url}`}
        alt={title}
        width={500}
        height={200}
      />
      <h2 className="my-4 font-bold capitalize text-4xl">{title}</h2>
      <div className="flex space-x-3">
        {topics.map((topic, index) => (
          <span key={`${topic}-${index}`} className="p-2 bg-gray-200 rounded">
            {topic}
          </span>
        ))}
      </div>
      <p className="my-2 text-left">{readingTime} min read</p>
      <div className="mt-6 text-left">
        {documentToReactComponents(postDetails)}
      </div>
    </div>
  );
};

export default PostDetail;
