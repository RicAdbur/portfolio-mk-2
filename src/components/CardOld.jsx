const Card = ({ name, slug, img, desc, tech, link, repo }) => {
  return (
    <div className="card card bg-secondary-subtle border-primary-subtle text-light mx-4 my-3">
      <img
      src={img}
      alt={name}
      className="card-img-top" 
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{desc}</p>
        <p>{tech}</p>
        <a href={link}>App</a> <a href={repo}>repo</a>
      </div>
    </div>
  )
};