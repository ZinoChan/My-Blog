import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  const { title, slug, thumbnail, topics } = post.fields;

  return (
    <div className="bg-white shadow-md border w-60 border-gray-200 rounded-lg  mb-5">
      <div>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={title}
          width={240}
          height={180}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">
          {topics.map((topic, index) => (
            <span
              key={`${topic}-${index}`}
              className="bg-gray-200 px-2 py-1 mr-2"
            >
              topic
            </span>
          ))}
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
          <Link href={`/posts/${slug}`}>Read more</Link>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
