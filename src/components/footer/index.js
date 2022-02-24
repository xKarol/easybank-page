import Navbar from "./navbar";
import Logo from "../logo";
import RequestInviteButton from "../request-invite-button";
import Socials from "./socials";
import NavbarItem from "./navbar-item";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <Logo light />
            <Socials />
          </div>
          <div className="col-12 d-flex flex-column">
            <Navbar>
              <NavbarItem href="/">About Us</NavbarItem>
              <NavbarItem href="/">Contact</NavbarItem>
              <NavbarItem href="/">Blog</NavbarItem>
            </Navbar>
            <Navbar>
              <NavbarItem href="/">Careers</NavbarItem>
              <NavbarItem href="/">Support</NavbarItem>
              <NavbarItem href="/">Privacy Policy</NavbarItem>
            </Navbar>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <RequestInviteButton className="my-4" />
            <span className="text-grayish-blue">
              © Easybank. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
