import { motion, AnimatePresence } from 'framer-motion';

import { drawerMenuVariants } from 'utils/framer';
import { MENU_LINKS } from 'utils/constants';

import NavLinks from 'components/nav/NavLinks';
import IconClose from 'components/icons/IconClose';

const DrawerMenu = ({ toggleMenu, setToggleMenu }) => {
  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          className="absolute top-0 left-0 right-0 w-screen h-screen z-1000 flex flex-col justify-center bg-black overflow-hidden"
          initial="initial"
          animate="animate"
          exit="exit"
          custom={toggleMenu}
          variants={drawerMenuVariants}
        >
          <header className="absolute top-0 right-0 left-0 flex items-center justify-end tw-container tw-h-header">
            <button
              className="origin-center border-none bg-none focus:outline-none text-white"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <IconClose />
            </button>
          </header>

          <nav className="tw-container">
            <ul className="flex flex-col justify-center space-y-12 h-2/3">
              {MENU_LINKS.map((menuLink) => (
                <NavLinks
                  key={menuLink.slug}
                  label={menuLink.label}
                  slug={menuLink.slug}
                  toggleMenu={toggleMenu}
                  setToggleMenu={setToggleMenu}
                />
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DrawerMenu;
