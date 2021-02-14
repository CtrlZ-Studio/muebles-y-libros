import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

import IconLogo from 'components/icons/IconLogo';

const AboutSection = ({ aboutData }) => {
  return (
    <article className="relative min-h-screen lg:h-screen bg-accent-dark py-12 lg:py-0 text-white lg:scroll-snap-start">
      <header className="absolute top-0 left-0 right-0 tw-header bg-gray-100 text-accent-dark border-accent-dark">
        {WEB_NAME} // {aboutData.heading}
      </header>

      <section className="h-full tw-px tw-pt flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 2xl:space-x-24">
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6 lg:space-y-12">
          <div
            className="flex flex-col space-y-3 lg:space-y-5 2xl:space-y-6 text-base lg:text-xl 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: aboutData.body.html }}
          />
          <div className="font-signature lg:text-2xl 2xl:text-3xl">
            Juan Serrano
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <Image
            alt={aboutData.heroImage.alt}
            src={aboutData.heroImage.url}
            width={aboutData.heroImage.width}
            height={aboutData.heroImage.height}
            layout="responsive"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-12">
          <IconLogo />
          <div className="flex justify-between lg:text-xl 2xl:text-2xl">
            <a
              className="tw-link"
              href="https://www.instagram.com/mueblesylibros"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              className="tw-link"
              href="tel:+34661169080"
              target="_blank"
              rel="noreferrer noopener"
            >
              Móvil
            </a>
            <a
              className="tw-link"
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
