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
      {/* <div className="hidden lg:block">
        <ul className="flex lg:space-x-14 2x:space-x-16">
          {MENU_LINKS &&
            MENU_LINKS.map((menuLink, index) => (
              <li key={index}>
                <ActiveLink href={`${menuLink.slug}`}>
                  <a>{menuLink.label}</a>
                </ActiveLink>
              </li>
            ))}
        </ul>
      </div> */}
    </motion.header>
  );
};

export default Header;
