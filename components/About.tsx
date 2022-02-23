import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const About = ({ author }) => {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto px-2">
        <h2 className="font-primary font-bold capitalize text-3xl mb-16">
          About the author
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="relative max-w-fit">
            <div className="absolute top-4 -right-12 transform -rotate-6 z-20 bg-secondary-100 rounded px-6 py-2">
              <p className="font-secondary font-bold text-white">
                {author.fields.name}
              </p>
            </div>
            <Image
              src={`https:${author.fields.authorImage.fields.file.url}`}
              height={600}
              width={500}
              alt="author image"
            />
            <div className="absolute -z-10 -bottom-4 bg-primary-400 w-60 h-10 -right-3"></div>
          </div>
          <div className="self-center">
            <h3 className="text-2xl font-secondary mb-6 font-bold capitalize">
              A little story about me
            </h3>
            <p className="font-secondary text-gray-600">
              {documentToReactComponents(author.fields.description)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
