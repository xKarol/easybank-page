import Card from "./card";

const data = [
  {
    id: 1,
    heading: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: "/images/icon-online.svg",
  },

  {
    id: 2,
    heading: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: "/images/icon-budgeting.svg",
  },

  {
    id: 3,
    heading: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: "/images/icon-onboarding.svg",
  },

  {
    id: 4,
    heading: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: "/images/icon-api.svg",
  },
];

function CardsList() {
  return (
    <div className="container">
      <div className="row">
        {data.map(({ id, heading, text, icon }) => (
          <Card key={id} heading={heading} text={text} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
