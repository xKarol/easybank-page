function Card({ heading, text, icon }) {
  return (
    <article>
      <img src={icon} alt={heading} className="my-4" />
      <h3 className="text-dark mb-3">{heading}</h3>
      <p className="text-grayish-blue">{text}</p>
    </article>
  );
}

export default Card;
