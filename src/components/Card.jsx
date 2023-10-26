const Card = ({ name, slug, img, desc, tech, link, repo }) => {
  return (
    <div className="card bg-secondary-subtle text-light mx-4 my-3">
      {/* Navigation Pill Component */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="btn btn-sm btn-outline-primary m-1" href={link}>App</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-sm btn-outline-primary m-1" href={repo}>Repo</a>
        </li>
      </ul>
      {/* Background Image */}
      <img src={img} className="card-img" alt="Background Image" />
      <div className="card-img-overlay">
        {/* Content Overlay */}
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{desc}</p>
        <p className="card-text fw-lighter">{tech}</p>
      </div>
    </div>
  )
};

export default Card;