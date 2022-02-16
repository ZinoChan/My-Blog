import LatestPost from "./LatestPost";
import Trending from "./Trending";

const Hero = ({ posts }) => {
  return (
    <section className=" relative min-h-full md:min-h-screen">
      <div className="max-w-screen-lg w-full mx-auto absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between">
          <div className="max-w-lg">
            <h1 className="text-8xl relative font-primary text-primary-dark-100 mb-4 font-bold">
              <span className="text-white relative heading-span z-20">Web</span>
              Design <br />
              <span className="ml-12">Journey</span>
            </h1>
            <p className="ml-12 max-w-md text-secondary text-gray-500">
              Click (Generate) to create a new font pairing, (Lock) to lock
              fonts that you want to keep, and (Edit) to choose a font manually.
            </p>
          </div>
          <LatestPost posts={posts.slice(0, 3)} />
        </div>
      </div>
      <Trending posts={posts.slice(0, 2)} />
    </section>
  );
};

export default Hero;
