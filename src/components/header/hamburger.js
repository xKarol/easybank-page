import { useEffect, useState } from "react";

function Hamburger() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    window.scrollTo(0, 0);
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [active]);

  return (
    <button
      className="navbar-toggler border-0 header__navbar__hamburger collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setActive(!active)}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default Hamburger;
