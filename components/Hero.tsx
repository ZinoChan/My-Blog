import LatestPost from "./LatestPost";
import Trending from "./Trending";

const Hero = ({ posts }) => {
  return (
    <section className=" md:relative min-h-screen">
      <div className="md:mb-0 mb-16 max-w-screen-lg w-full px-2 mx-auto md:absolute md:top-1/3 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="flex justify-between lg:flex-row flex-col lg:space-y-0 space-y-20">
          <div className="max-w-lg self-center lg:self-start">
            <h1 className="sm:text-8xl text-6xl relative font-primary text-primary-dark-100 mb-4 font-bold">
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
