import MainText from "../why-choose/main-text";
import ArticlesList from "./articles-list";

function LatestArticles() {
  return (
    <section className="container-fluid bg-very-light-gray py-5">
      <div className="container">
        <MainText />
        <ArticlesList />
      </div>
    </section>
  );
}

export default LatestArticles;
