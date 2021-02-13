import Alert from 'components/nav/Alert';

const Layout = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
