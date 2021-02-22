import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

import SectionHeader from 'components/shared/SectionHeader';
import IconLogo from 'components/icons/IconLogo';

const year = new Date().getFullYear();

const ContactSection = ({ contactData }) => {
  return (
    <article className="relative h-screen tw-px text-white bg-accent-dark scroll-snap-start">
      <SectionHeader bg="bg-white" text="text-accent-dark">
        {WEB_NAME} // {contactData.heading}
      </SectionHeader>

      <section className="flex flex-col items-center justify-center h-full tw-pt space-y-6 md:space-y-12 lg:space-y-10 2xl:space-y-12 text-base md:text-2xl lg:text-xl 2xl:text-2xl">
        <div className="w-full lg:w-1/3">
          <IconLogo />
        </div>

        <div className="flex space-x-12 md:space-x-24 lg:space-x-20 2xl:space-x-24">
          <a
            className="tw-link text-white hover:text-accent-medium"
            href="tel:+34661169080"
            target="_blank"
            rel="noreferrer noopener"
          >
            Móvil
          </a>
          <a
            className="tw-link text-white hover:text-accent-medium"
            href="https://www.instagram.com/mueblesylibros"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
          <a
            className="tw-link text-white hover:text-accent-medium"
            href="mailto:jserranopalencia@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Email
          </a>
        </div>
      </section>

      <footer className="absolute bottom-0 left-0 right-0 h-6 lg:h-10 2xl:h-12 flex items-center justify-center font-light">
        <small className="text-white 2xl:text-sm opacity-50">
          &copy; {year} Muebles y Libros | Web de{' '}
          <a
            href="https://github.com/CtrlZ-Studio"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ctrl-Z Studio
          </a>
        </small>
      </footer>
    </article>
  );
};

export default ContactSection;
