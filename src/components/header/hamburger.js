import React from "react";

function Hamburger() {
  return (
    <button
      class="navbar-toggler border-0 header__navbar__hamburger"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  );
}

export default Hamburger;
