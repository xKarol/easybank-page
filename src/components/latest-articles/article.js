function Article({ author, heading, text, img }) {
  return (
    <div className="col">
      <article className="card border-0 rounded">
        <img
          src={img}
          className="card-img-top latest-articles__image"
          alt="Receive money in any currency with no fees"
        />
        <div className="card-body p-5 text-grayish-blue">
          <small>By {author}</small>
          <h4 className="text-dark fs-2 mt-3 latest-articles__heading">
            {heading}
          </h4>
          <p>{text}</p>
        </div>
      </article>
    </div>
  );
}

export default Article;
