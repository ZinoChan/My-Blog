import Image from "next/image";
import Link from "next/link";

const Trending = ({ posts }) => {
  return (
    <div className="w-full max-w-screen-lg bg-secondary-400 p-2 md:absolute bottom-0">
      <div className="max-w-screen-lg  md:flex">
        <div className="ml-auto relative md:mb-0 mb-2">
          <h4 className="font-secondary text-2xl md:transform md:-left-20 md:-rotate-90 md:origin-center md:absolute md:top-1/2 md:-translate-y-1/2  text-primary-100 font-bold capitalize">
            trending
          </h4>
        </div>
        <div className="flex items-center flex-wrap md:space-y-0 space-y-6 md:space-x-4">
          {posts.map((post) => (
            <Link
              passHref
              href={`/posts/${post.fields.slug}`}
              key={post.sys.id}
            >
              <div className="flex space-x-4 cursor-pointer">
                <div className="h-28 w-28 bg-gray-200">
                  <Image
                    src={`https:${post.fields.thumbnail.fields.file.url}`}
                    height={112}
                    width={112}
                    alt={post.fields.title}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className=" text-base font-bold font-secondary mb-2">
                    {post.fields.title}
                  </h4>
                  <p className="text-ellipsis w-56 h-12 overflow-hidden text-gray-800 text-xs font-secondary font-semibold">
                    {post.fields.postDetails.content[0].content[0].value}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
