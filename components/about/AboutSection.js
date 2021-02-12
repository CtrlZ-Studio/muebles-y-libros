import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

import IconLogo from 'components/icons/IconLogo';

const AboutSection = ({ aboutData }) => {
  return (
    <article className="relative min-h-screen lg:h-screen bg-accent-dark text-white lg:scroll-snap-start">
      <header className="absolute top-0 left-0 right-0 tw-header border-bottom border-accent-dark bg-gray-100 text-accent-dark">
        {WEB_NAME} // {aboutData.heading}
      </header>

      <section className="h-full tw-px tw-pt flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 2xl:space-x-24">
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6 lg:space-y-12">
          <div
            className="flex flex-col lg:space-y-3 2xl:text-xl"
            dangerouslySetInnerHTML={{ __html: aboutData.body.html }}
          />
          <div className="font-signature lg:text-2xl 2xl:text-3xl">
            Juan Serrano
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <Image
            src={aboutData.heroImage.url}
            width={aboutData.heroImage.width}
            height={aboutData.heroImage.height}
            layout="responsive"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-12">
          <IconLogo />
          <div className="flex justify-between lg:text-lg 2xl:text-xl">
            <a
              href="https://www.instagram.com/mueblesylibros"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              href="tel:+34661169080"
              target="_blank"
              rel="noreferrer noopener"
            >
              Móvil
            </a>
            <a
              href="mailto:jserranopalencia@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutSection;
