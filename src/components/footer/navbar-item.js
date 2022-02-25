function NavbarItem({ children, href }) {
  return (
    <li className="nav-item">
      <a className="nav-link text-light-grayish-blue footer__link" href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
