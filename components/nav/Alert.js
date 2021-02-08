const Alert = ({ preview }) => {
  return (
    <div className="py-2 text-center text-sm">
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
    </div>
  );
};

export default Alert;
