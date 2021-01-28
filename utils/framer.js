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

export const drawerMenuVariants = {
  initial: { y: '-100%' },
  animate: (custom) => ({
    y: custom ? 0 : '-100%',
    transition: mainTransition
  }),
  exit: {
    y: '-100%',
    transition: mainTransition
  }
};
