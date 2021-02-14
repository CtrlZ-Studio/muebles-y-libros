import Image from 'next/image';

const ContactSection = ({ contactData }) => {
  return (
    <section className="flex items-center space-x-3 py-12 tw-px bg-accent-dark text-white">
      <div
        className="w-1/2 text-base lg:text-xl 2xl:text-2xl"
        dangerouslySetInnerHTML={{ __html: contactData.body.html }}
      />
    </section>
  );
};

export default ContactSection;
