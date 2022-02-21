import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="w-full">
      <div className="relative mb-6 w-full">
        <div className="w-full h-64 bg-primary-400 transform -rotate-3 z-0 absolute top-0 left-0"></div>
        <div className=" w-full h-64 mb-4">
          <Image
            src={`https:${post.fields.thumbnail.fields.file.url}`}
            layout="fill"
            alt={post.fields.title}
          />
        </div>
      </div>
      <h3 className="font-secondary text-xl mb-2 font-bold">
        {post.fields.title}
      </h3>
      <p className="text-ellipsis h-20 overflow-hidden font-secondary text-gray-400">
        {post.fields.postDetails.content[0].content[0].value}
      </p>
      <div className=" mt-2">
        <Link href={`/posts/${post.fields.slug}`}>
          <a className="text-secondary-100 font-secondary capitalize text-sm font-bold">
            read more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
