import Link from 'next/link';

const NavLinks = ({ slug, label, toggleMenu, setToggleMenu }) => {
  return (
    <li>
      <Link href={slug}>
        <a
          className="text-white uppercase"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {label}
        </a>
      </Link>
    </li>
  );
};

export default NavLinks;
