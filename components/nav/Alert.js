const Alert = ({ preview }) => {
  return (
    <div>
      <div className="py-2 text-center text-sm">
        {preview ? (
          <>
            This page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Alert;
