import RequestInviteButton from "../request-invite-button";

function HeroText() {
  return (
    <div className="col-12 col-md-6">
      <div className="container mx-auto d-flex flex-column align-items-center align-items-md-start mb-5 text-center text-md-start hero__text">
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
  );
}

export default HeroText;
