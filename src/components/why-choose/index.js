import CardsList from "./cards-list";
import MainText from "./main-text";

function WhyChoose() {
  return (
    <section className="bg-light-grayish-blue py-5">
      <div className="container text-center text-md-start">
        <MainText />
        <CardsList />
      </div>
    </section>
  );
}

export default WhyChoose;
