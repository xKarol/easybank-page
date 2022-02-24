import Card from "./card";

function WhyChoose() {
  return (
    <section className="bg-light-grayish-blue py-5">
      <div className="container text-center">
        <h2 className="eb-heading">Why choose Easybank?</h2>
        <p className="mt-3 mb-4 text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Card
                heading={"Online Banking"}
                text={
                  "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                }
                icon={"/images/icon-online.svg"}
              />
            </div>
            <div className="col-12">
              <Card
                heading={"Simple Budgeting"}
                text={
                  "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
                }
                icon={"/images/icon-budgeting.svg"}
              />
            </div>
            <div className="col-12">
              <Card
                heading={"Fast Onboarding"}
                text={
                  "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                }
                icon={"/images/icon-onboarding.svg"}
              />
            </div>
            <div className="col-12">
              <Card
                heading={"Open API"}
                text={
                  "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                }
                icon={"/images/icon-api.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
