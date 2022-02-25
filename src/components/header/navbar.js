function Navbar() {
  return (
    <nav
      className="collapse navbar-collapse flex-grow-0 mx-auto"
      id="navbarNav"
    >
      <ul className="navbar-nav header__navbar">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
