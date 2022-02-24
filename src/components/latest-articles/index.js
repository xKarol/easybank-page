import Article from "./article";

function LatestArticles() {
  return (
    <section className="container-fluid bg-very-light-gray py-5">
      <h1 className="text-dark eb-heading text-center my-5">Latest Articles</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <Article
          author="Claire Robinson"
          img="/images/image-currency.jpg"
          heading="Receive money in any currency with no fees"
          text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        />

        <Article
          author="Wilson Hutton"
          img="/images/image-restaurant.jpg"
          heading="Treat yourself without worrying about money"
          text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />

        <Article
          author="Wilson Hutton"
          img="/images/image-plane.jpg"
          heading="Take your Easybank card wherever you go"
          text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <Article
          author="Claire Robinson"
          img="/images/image-confetti.jpg"
          heading="Our invite-only Beta accounts are now live!"
          text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </div>
    </section>
  );
}

export default LatestArticles;
