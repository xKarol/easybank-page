import Navbar from "./navbar";
import Logo from "../logo";
import RequestInviteButton from "../request-invite-button";
import Socials from "./socials";
import NavbarItem from "./navbar-item";
import Copyright from "./copyright";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-start">
            <Logo light />
            <Socials />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-lg-between flex-lg-row">
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
          <div className="col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-end">
            <RequestInviteButton className="my-4" />
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
