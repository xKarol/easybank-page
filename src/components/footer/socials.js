import React from "react";
import SocialIcon from "./social-icon";

function Socials() {
  return (
    <section className="d-flex fs-1 my-4">
      <SocialIcon icon="facebook" href="/" />
      <SocialIcon icon="youtube" href="/" />
      <SocialIcon icon="twitter" href="/" />
      <SocialIcon icon="pinterest" href="/" />
      <SocialIcon icon="instagram" href="/" />
    </section>
  );
}

export default Socials;
