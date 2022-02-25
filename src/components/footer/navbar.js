function Navbar({ children }) {
  return (
    <ul className="nav flex-column align-items-center align-items-lg-start">
      {children}
    </ul>
  );
}

export default Navbar;
