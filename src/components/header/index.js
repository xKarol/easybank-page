import Logo from "../logo";
import RequestInviteButton from "../request-invite-button";
import Hamburger from "./hamburger";
import Navbar from "./navbar";

function Header() {
  return (
    <header className="bg-very-light-gray">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Logo className="navbar-brand" />
        <Hamburger />
        <Navbar />
        <RequestInviteButton className="header__button" />
      </nav>
    </header>
  );
}

export default Header;
