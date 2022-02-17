import Image from "next/image";

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
      <p className="font-secondary text-gray-400">
        {post.fields.postDetails.content[0].content[0].value}
      </p>
    </div>
  );
};

export default PostCard;