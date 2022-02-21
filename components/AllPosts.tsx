import PostCard from "./PostCard";

const AllPosts = ({ posts }) => {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto px-2">
        <h2 className="mb-16 font-primary text-primary-dark-100 font-bold text-3xl text-center">
          All Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.sys.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
