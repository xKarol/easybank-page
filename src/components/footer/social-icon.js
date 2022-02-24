function SocialIcon({ href, icon }) {
  return (
    <a href={href ? href : "/"} className="text-white me-3">
      <i className={`bi ${icon ? `bi-${icon}` : ""}`}></i>
    </a>
  );
}

export default SocialIcon;
