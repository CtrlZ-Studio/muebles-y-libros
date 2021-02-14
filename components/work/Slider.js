import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { sliderVariants } from 'utils/framer';

import IconRight from 'components/icons/IconRight';
import IconLeft from 'components/icons/IconLeft';

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slider = ({ gallery }) => {
  const [[slide, direction], setSlide] = useState([0, 0]);

  const images = gallery.map((image) => image.url);

  const imageIndex = wrap(0, images.length, slide);

  const paginate = (newDirection) => {
    setSlide([slide + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full lg:w-1/3 lg:h-full lg:flex lg:items-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          alt="Mueble artesanal de madera."
          className="absolute"
          key={slide}
          src={images[imageIndex]}
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 1 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div
        className="tw-slider-control -right-12 lg:-right-20 2xl:-right-24 tw-link"
        onClick={() => paginate(1)}
      >
        <IconRight />
      </div>
      <div
        className="tw-slider-control -left-12 lg:-left-20 2xl:-left-24 tw-link"
        onClick={() => paginate(-1)}
      >
        <IconLeft />
      </div>
    </div>
  );
};

export default Slider;
