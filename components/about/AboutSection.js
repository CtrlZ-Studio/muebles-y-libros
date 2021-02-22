import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

import SectionHeader from 'components/shared/SectionHeader';

const AboutSection = ({ aboutData }) => {
  return (
    <article className="relative min-h-screen lg:h-screen tw-px text-accent-dark scroll-snap-start">
      <SectionHeader bg="bg-accent-dark" text="text-white">
        {WEB_NAME} // {aboutData.heading}
      </SectionHeader>

      <section className="h-full flex flex-col lg:flex-row lg:justify-between md:space-y-16 space-y-12 lg:space-y-0 pt-20 md:pt-48 md:pb-24 ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-12 lg:space-y-10 2xl:space-y-12">
          <div
            className="flex flex-col space-y-3 md:space-y-4 lg:space-y-5 2xl:space-y-6 text-base md:text-2xl lg:text-base 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: aboutData.body.html }}
          />
          <div className="font-signature text-lg md:text-4xl lg:text-2xl 2xl:text-4xl">
            Juan Serrano
          </div>
        </div>

        <div className="relative w-full lg:w-1/3 flex flex-col justify-center 2xl:py-24">
          <Image
            alt={aboutData.heroImage.alt}
            src={aboutData.heroImage.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
    </article>
  );
};

export default AboutSection;
