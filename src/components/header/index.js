import Logo from "../logo";
import RequestInviteButton from "../request-invite-button";
import Hamburger from "./hamburger";
import Navbar from "./navbar";

function Header() {
  return (
    <header class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <Logo />
        <Hamburger />
        <Navbar />
        <RequestInviteButton className="d-none d-lg-block" />
      </div>
    </header>
  );
}

export default Header;
