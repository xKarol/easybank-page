import heroImg from "../../assets/image-mockups.png";

function HeroImage() {
  return (
    <div className="col-12 order-md-1 col-md-6 overflow-hidden hero__images d-flex d-md-block flex-column">
      <img
        className="img-fluid hero__images__main mx-auto"
        src={heroImg}
        alt="mobile payments"
      />
    </div>
  );
}

export default HeroImage;
