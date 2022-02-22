import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

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
    <div className="max-w-screen-md mx-auto px-2 py-6">
      <h2 className="font-bold capitalize text-center  text-4xl mb-6">
        {title}
      </h2>
      <div className="text-center">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt={title}
          width={600}
          height={400}
        />
      </div>

      <div className="flex justify-between my-6">
        <div className="flex space-x-3">
          {topics.map((topic, index) => (
            <span
              key={`${topic}-${index}`}
              className="p-1 bg-primary-400 text-white rounded text-sm font-secondary font-bold"
            >
              {topic}
            </span>
          ))}
        </div>
        <p className="font-secondary text-sm font-bold">
          {readingTime} min read
        </p>
      </div>

      <div className="mt-6 mb-10 text-left">
        {documentToReactComponents(postDetails)}
      </div>

      <Link href="/">
        <a className="rounded bg-primary-100 text-white text-sm font-secondary capitalize font-bold py-2 px-6">
          back to home
        </a>
      </Link>
    </div>
  );
};

export default PostDetail;
