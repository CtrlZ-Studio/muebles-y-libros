const pageEasing = [0.87, 0, 0.13, 1];
const pageTransition = {
  duration: 0.3,
  ease: pageEasing
};

const mainEasing = [0.6, 0.05, -0.01, 0.9];
const mainTransition = {
  duration: 0.6,
  ease: mainEasing
};

export const pageVariants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...pageTransition,
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
};

export const childVariants = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
};

export const headerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: mainTransition
  }
};

export const sliderVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 250 : -250,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 250 : -250,
      opacity: 0
    };
  }
};
