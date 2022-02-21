import Link from "next/link";

const LatestPost = ({ posts }) => {
  return (
    <div className="max-w-sm">
      <h3 className="text-secondary-100 font-bold text-xl capitalize mb-2">
        Latest articles
      </h3>
      {posts.map((post) => (
        <div key={post.sys.id} className="border-b border-secondary-200 py-4">
          <h4 className="font-bold font-secondary text-primary-dark-100 mb-2">
            {post.fields.title}
          </h4>
          <p className="flex items-center justify-between font-secondary">
            <span className="text-gray-500 text-xs">
              {post.fields.readingTime} min read
            </span>
            <Link href={`/posts/${post.fields.slug}`}>
              <a className="text-primary-300 font-bold capitalize text-sm">
                read more
              </a>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
