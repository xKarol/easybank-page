import heroImg from "../../assets/image-mockups.png";
import RequestInviteButton from "../request-invite-button";

function Hero() {
  return (
    <section className="container-fluid bg-very-light-gray">
      <div className="row">
        <div className="col-12 overflow-hidden hero__images">
          <img
            className="img-fluid hero__images__main"
            src={heroImg}
            alt="mobile payments"
          />
        </div>
        <div className="col-12">
          <div className="container d-flex flex-column align-items-center mb-5 text-center">
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
