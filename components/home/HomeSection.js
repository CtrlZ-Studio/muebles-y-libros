import Image from 'next/image';
import { WEB_NAME } from 'utils/constants';

const HomeSection = ({ homeData }) => {
  let [first, second, third] = WEB_NAME.split(' ');

  return (
    <section className="h-screen flex flex-col space-y-6 lg:space-y-10 2xl:space-y-12 justify-center items-center tw-px lg:scroll-snap-start">
      <div>
        <h1 className="tw-title">{first}</h1>
      </div>

      <div className="w-full lg:w-1/4">
        <Image
          src={homeData.heroImage.url}
          width={homeData.heroImage.width}
          height={homeData.heroImage.height}
          layout="responsive"
        />
      </div>

      <div>
        <h1 className="tw-title">
          <span className="normal-case">{second}</span>
          <span> {third}</span>
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
