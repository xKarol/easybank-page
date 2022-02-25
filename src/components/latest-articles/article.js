function Article({ author, heading, text, img }) {
  return (
    <div className="col">
      <a href="/" className="text-decoration-none">
        <article className="card border-0 rounded h-100 latest-articles">
          <img
            src={img}
            className="card-img-top latest-articles__image"
            alt="Receive money in any currency with no fees"
          />
          <div className="card-body p-5 p-md-3 text-grayish-blue">
            <small>By {author}</small>
            <h4 className="text-dark fs-2 mt-3 latest-articles__heading">
              {heading}
            </h4>
            <p className="latest-articles__text">{text}</p>
          </div>
        </article>
      </a>
    </div>
  );
}

export default Article;
