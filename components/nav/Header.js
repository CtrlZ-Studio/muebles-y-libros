import { motion } from 'framer-motion';

import { headerVariants } from 'utils/framer';
import { MENU_LINKS } from 'utils/constants';

import NavLogo from 'components/nav/NavLogo';
import ActiveLink from 'components/nav/ActiveLink';
import IconMenu from 'components/icons/IconMenu';

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <motion.header
      className="absolute top-0 right-0 left-0 z-999 flex justify-between items-center w-full bg-gray-300 tw-container tw-h-header"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div>
        <NavLogo />
      </div>

      <div
        className="block lg:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <IconMenu />
      </div>

      <div className="hidden lg:block">
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
      </div>
    </motion.header>
  );
};

export default Header;
