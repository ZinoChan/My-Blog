import Image from "next/image";

const TopPost = ({ posts }) => {
  return (
    <section className="py-28">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-primary font-bold text-3xl mb-8">Top Articles</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="w-full">
            <div className="relative mb-6 w-full">
              <div className="w-full h-64 bg-primary-400 transform -rotate-3 z-0 absolute top-0 left-0"></div>
              <div className=" w-full h-64 mb-4">
                <Image
                  src={`https:${posts[0].fields.thumbnail.fields.file.url}`}
                  layout="fill"
                  alt={posts[0].fields.title}
                />
              </div>
            </div>
            <h3 className="font-secondary text-xl mb-2 font-bold">
              {posts[0].fields.title}
            </h3>
            <p className="font-secondary text-gray-400">
              {posts[0].fields.postDetails.content[0].content[0].value}
            </p>
          </div>
          <div>
            {posts.slice(1, 5).map((post) => (
              <div
                key={post.sys.id}
                className="bg-white max-w-md mx-auto p-4 rounded shadow-lg mb-6 transform -rotate-3"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold font-secondary text-lg">
                    {post.fields.title}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <p className="font-secondary text-sm text-gray-500">
                    {post.fields.readingTime} min read
                  </p>
                  <p className="font-secondary font-semibold capitalize text-sm text-secondary-200">
                    read more
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPost;
