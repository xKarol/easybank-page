function NavItem({ children, href }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavItem;
