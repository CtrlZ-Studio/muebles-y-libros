import Image from 'next/image';

const HomeFullImage = ({ fullImage }) => {
  return (
    <section className="lg:h-screen">
      <Image
        src={fullImage.url}
        width={fullImage.width}
        height={fullImage.height}
        layout="responsive"
      />
    </section>
  );
};

export default HomeFullImage;
