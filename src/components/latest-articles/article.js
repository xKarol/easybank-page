import React from "react";

function Article({ author, heading, text, img }) {
  return (
    <div className="col-12">
      <article className="card border-0 rounded">
        <img
          src={img}
          className="card-img-top"
          alt="Receive money in any currency with no fees"
        />
        <div className="card-body p-5 text-grayish-blue">
          <small className="">By {author}</small>
          <h4 className="text-dark fs-2 mt-3">{heading}</h4>
          <p className="">{text}</p>
        </div>
      </article>
    </div>
  );
}

export default Article;
