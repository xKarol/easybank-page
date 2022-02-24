import Logo from "../logo";
import RequestInviteButton from "../request-invite-button";
import Hamburger from "./hamburger";
import Navbar from "./navbar";

function Header() {
  return (
    <header className="bg-white">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Logo className="navbar-brand" />
        <Hamburger />
        <Navbar />
        <RequestInviteButton className="d-none d-lg-block" />
      </nav>
    </header>
  );
}

export default Header;
