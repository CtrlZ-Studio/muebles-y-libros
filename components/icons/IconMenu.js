const IconMenu = () => {
  return (
    <button className="border-none bg-none outline-none ring-0 focus:outline-none">
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke={2}
          strokeLinecap="square"
          strokeLinejoin="square"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default IconMenu;
