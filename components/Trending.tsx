import Image from "next/image";

const Trending = ({ posts }) => {
  return (
    <div className="w-full max-w-screen-lg bg-secondary-400 p-2 absolute bottom-0">
      <div className="max-w-screen-lg  flex">
        <div className="ml-auto relative">
          <h4 className="font-secondary text-2xl transform -left-20 -rotate-90 origin-center absolute top-1/2 -translate-y-1/2  text-primary-100 font-bold capitalize">
            trending
          </h4>
        </div>
        <div className="flex items-center space-x-4">
          {posts.map((post) => (
            <div key={post.sys.id} className="flex space-x-4">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
