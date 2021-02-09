const Alert = ({ preview }) => {
  return (
    <>
      {preview ? (
        <>
          This page is a preview.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:text-accent-light duration-200 transition-colors"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
