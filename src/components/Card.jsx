const Card = ({ name, slug, img, desc, tech, link, repo }) => {
  return (
  <>
  <ul className="nav nav-pills card-header-pills border rounded-top">
    <li className="nav-item btn btn-outline-primary">
      <a className="nav-link" href={link} target="_blank">App</a>
    </li>
    <li className="nav-item btn btn-outline-primary mx-1">
      <a className="nav-link" href={repo} target="_blank">Repo</a>
    </li>
  </ul>
<div className="card text-bg-dark border rounded-bottom mb-3" style={{ backgroundImage: `url(${img})`}}>
  {/* <img src={img} className="card-img opacity-50" alt="..." /> */}
  <div className="card-img-overlay">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{desc}</p>
    <p className="card-text"><small>{tech}</small></p>
  </div>
</div>
</>
  )
}

export default Card