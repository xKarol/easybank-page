import NavItem from "./nav-item";

function Navbar() {
  return (
    <nav
      className="collapse navbar-collapse flex-grow-0 mx-auto header__navbar"
      id="navbarNav"
    >
      <ul className="navbar-nav py-3 header__navbar__list rounded-3">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/">About</NavItem>
        <NavItem href="/">Contact</NavItem>
        <NavItem href="/">Blog</NavItem>
        <NavItem href="/">Careers</NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
