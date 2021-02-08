import Image from 'next/image';

const HomeHero = ({ homeData }) => {
  let [first, ...second] = homeData.heading.split(' ');
  second = second.join(' ');

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-3">
      <div className="lg:col-start-2 lg:col-span-1 space-y-1 lg:space-y-3">
        <h1 className="self-center lg:text-center font-heading text-6xl lg:text-8xl text-accent-dark">
          {first}
        </h1>

        <div className="px-6 lg:px-12 2xl:px-16">
          <Image
            src={homeData.heroImage.url}
            width={homeData.heroImage.width}
            height={homeData.heroImage.height}
            layout="responsive"
          />
        </div>

        <h1 className="self-center lg:text-center font-heading text-6xl lg:text-8xl text-accent-dark">
          {second}
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
