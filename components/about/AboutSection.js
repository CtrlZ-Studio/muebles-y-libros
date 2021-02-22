import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

import IconLogo from 'components/icons/IconLogo';

const AboutSection = ({ aboutData }) => {
  return (
    <article className="relative min-h-screen lg:h-screen py-12 lg:py-0 text-accent-dark white lg:scroll-snap-start">
      <header className="absolute top-0 left-0 right-0 tw-header text-white bg-accent-dark">
        {WEB_NAME} // {aboutData.heading}
      </header>

      <section className="h-full tw-px tw-pt flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-10 2xl:space-y-12">
          <div
            className="flex flex-col space-y-3 lg:space-y-5 2xl:space-y-6 text-base lg:text-base 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: aboutData.body.html }}
          />
          <div className="font-signature text-lg lg:text-2xl 2xl:text-4xl">
            Juan Serrano
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center 2xl:py-24">
          <Image
            alt={aboutData.heroImage.alt}
            src={aboutData.heroImage.url}
            width={aboutData.heroImage.width}
            height={aboutData.heroImage.height}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
    </article>
  );
};

export default AboutSection;
