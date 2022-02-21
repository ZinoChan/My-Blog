import Link from "next/link";
import PostCard from "./PostCard";

const TopPost = ({ posts }) => {
  return (
    <section className="py-28">
      <div className="max-w-screen-lg mx-auto px-2">
        <h2 className="font-primary font-bold text-3xl mb-8">Top Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <PostCard post={posts[0]} />
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
                  <Link href={`/posts/${post.fields.slug}`}>
                    <a className="font-secondary font-bold capitalize text-sm text-secondary-200">
                      read more
                    </a>
                  </Link>
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
