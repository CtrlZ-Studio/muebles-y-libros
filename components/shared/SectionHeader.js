const SectionHeader = ({ children, bg, text }) => {
  return (
    <header
      className={`absolute top-0 left-0 right-0 flex items-center h-10 md:h-24 lg:h-14 2xl:h-24 px-6 lg:px-10 2xl:px-12 z-50 uppercase text-base md:text-3xl lg:text-xl 2xl:text-3xl ${text} ${bg} border-2 border-accent-dark`}
    >
      {children}
    </header>
  );
};

export default SectionHeader;
