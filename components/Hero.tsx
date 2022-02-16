const Hero = () => {
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
          <div>
            <h3 className="text-secondary-100 font-bold text-xl capitalize mb-4">
              Latest articles
            </h3>
            <div className="border-b border-secondary-200 py-4">
              <h4 className="font-bold font-secondary text-primary-dark-100 mb-2">
                Inspiring web design trends for 2022
              </h4>
              <p className="flex justify-between">
                <span>12 min</span>
                <span>read more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-lg bg-secondary-400 p-2 absolute bottom-0">
        <div className="max-w-screen-lg  flex">
          <div className="ml-auto relative">
            <h4 className="font-secondary text-2xl transform -left-12 -rotate-90 origin-center absolute top-1/2 -translate-y-1/2  text-primary-100 font-bold capitalize">
              trending
            </h4>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <div className="h-28 w-28 bg-gray-200"></div>
              <div>
                <h4 className=" text-sm font-bold font-secondary mb-2">
                  Cosè Lorem Ipsum
                </h4>
                <p className="text-gray-800 text-xs font-secondary">
                  t you want to keep, and (Edit) to choose a font manually.
                </p>
              </div>
            </div>
            <div className="flex  space-x-4">
              <div className="h-32 w-28 bg-gray-200"></div>
              <div>
                <h4 className=" text-sm font-bold font-secondary mb-2">
                  Cosè Lorem Ipsum
                </h4>
                <p className="text-gray-800 text-xs font-secondary">
                  t you want to keep, and (Edit) to choose a font manually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
