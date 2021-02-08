import { useState } from 'react';
import PropTypes from 'prop-types';

import { WEB_NAME } from 'utils/constants';

import DrawerMenu from 'components/nav/DrawerMenu';
import Header from 'components/nav/Header';
import Footer from 'components/nav/Footer';

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header
        webName={WEB_NAME}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      {/* <DrawerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
