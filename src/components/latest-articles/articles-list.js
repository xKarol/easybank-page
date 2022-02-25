import Article from "./article";

const data = [
  {
    id: 1,
    heading: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    author: "Claire Robinson",
    img: "/images/image-currency.jpg",
  },
  {
    id: 2,
    heading: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    author: "Wilson Hutton",
    img: "/images/image-restaurant.jpg",
  },
  {
    id: 3,
    heading: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    author: "Wilson Hutton",
    img: "/images/image-plane.jpg",
  },
  {
    id: 4,
    heading: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    author: "Claire Robinson",
    img: "/images/image-confetti.jpg",
  },
];

function ArticlesList() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {data.map(({ id, heading, text, author, img }) => (
        <Article
          key={id}
          heading={heading}
          text={text}
          author={author}
          img={img}
        />
      ))}
    </div>
  );
}

export default ArticlesList;
