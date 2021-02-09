import { useState } from 'react';
import PropTypes from 'prop-types';

import { WEB_NAME } from 'utils/constants';

import Header from 'components/nav/Header';
import Alert from 'components/nav/Alert';

const Layout = ({ preview, children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {/* <Header
        webName={WEB_NAME}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      /> */}
      <Alert preview={preview} />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
