import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

import Logo from 'components/icons/Logo';

const AboutSection = ({ aboutData, contactData }) => {
  return (
    <article className="relative min-h-screen lg:h-screen bg-accent-dark text-white">
      <header className="flex items-center h-12 px-3 lg:px-6 bg-gray-100 text-accent-dark uppercase lg:text-2xl border-t-2 border-accent-dark">
        {WEB_NAME} // {aboutData.heading}
      </header>

      <section className="h-full tw-container flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 py-12 lg:pt-0">
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6 lg:space-y-12">
          <div
            className="flex flex-col lg:space-y-3"
            dangerouslySetInnerHTML={{ __html: aboutData.body.html }}
          />
          <div className="flex justify-between font-signature lg:text-lg">
            <span>Juan Serrano</span>
            <span>Rogosino</span>
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
          <Logo />
          <div className="flex justify-between">
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
