function NavbarItem({ children, href }) {
  return (
    <li class="nav-item">
      <a class="nav-link text-light-grayish-blue footer__link" href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
