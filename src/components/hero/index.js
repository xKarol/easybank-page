import HeroImage from "./hero-image";
import HeroText from "./hero-text";

function Hero() {
  return (
    <section className="container-fluid bg-very-light-gray hero">
      <div className="row align-items-md-center">
        <HeroImage />
        <HeroText />
      </div>
    </section>
  );
}

export default Hero;
