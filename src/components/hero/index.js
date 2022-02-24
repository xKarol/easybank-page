import heroImg from "../../assets/image-mockups.png";
import RequestInviteButton from "../request-invite-button";

function Hero() {
  return (
    <section className="container-fluid bg-very-light-gray">
      <div className="row align-items-md-center">
        <div className="col-12 order-md-1 col-md-6 overflow-hidden hero__images position-relative">
          <img
            className="img-fluid hero__images__main position-absolute top-0 start-0 end-0"
            src={heroImg}
            alt="mobile payments"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="container d-flex flex-column align-items-center align-items-md-start mb-5 text-center text-md-start hero__text">
            <h1 className="text-dark eb-heading">
              Next generation digital banking
            </h1>
            <p className="mt-3 text-grayish-blue">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <RequestInviteButton className={"my-2"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
