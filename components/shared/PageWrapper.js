import { motion } from 'framer-motion';
import { pageVariants } from 'utils/framer';

const PageWrapper = ({ children }) => {
  return (
    <motion.section
      className="tw-container min-h-screen flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-0 tw-mt"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={pageVariants}
    >
      {children}
    </motion.section>
  );
};

export default PageWrapper;
