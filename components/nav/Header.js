import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { headerVariants } from 'utils/framer';

import IconBack from 'components/icons/IconBack';

const Header = () => {
  const router = useRouter();

  const route = router.route;

  return (
    <motion.header
      className="absolute top-0 right-0 left-0 z-999 flex justify-between items-center w-full tw-container tw-h-header"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      {route !== '/' ? (
        <a href="/">
          <IconBack />
        </a>
      ) : (
        <span></span>
      )}
    </motion.header>
  );
};

export default Header;
