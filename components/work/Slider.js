import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { sliderVariants } from 'utils/framer';

import IconRight from 'components/icons/IconRight';
import IconLeft from 'components/icons/IconLeft';

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slider = ({ gallery }) => {
  const [[slide, direction], setSlide] = useState([0, 0]);

  const images = gallery.map((image) => image.url);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, slide);

  const paginate = (newDirection) => {
    setSlide([slide + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute lg:max-h-full-75"
          key={slide}
          src={images[imageIndex]}
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
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
        className="absolute -right-8 lg:right-0 flex justify-center items-center w-4 lg:w-12 h-4 lg:h-12 select-none cursor-pointer border border-accent-dark rounded-full text-4xl z-50 text-accent-dark"
        onClick={() => paginate(1)}
      >
        <IconRight />
      </div>
      <div
        className="absolute -left-8 lg:left-0 flex justify-center items-center w-4 lg:w-12 h-4 lg:h-12 select-none cursor-pointer border border-accent-dark rounded-full text-4xl z-50 text-accent-dark"
        onClick={() => paginate(-1)}
      >
        <IconLeft />
      </div>
    </div>
  );
};

export default Slider;
