import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";

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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: items[0],
    },
  };
};

const PostDetail = ({ post }) => {
  console.log(post);
  return (
    <div>
      <p>post</p>
    </div>
  );
};

export default PostDetail;
