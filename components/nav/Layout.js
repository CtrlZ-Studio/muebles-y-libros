import { useState } from 'react';
import PropTypes from 'prop-types';

import { WEB_NAME } from 'utils/constants';

import Header from 'components/nav/Header';

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header
        webName={WEB_NAME}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
