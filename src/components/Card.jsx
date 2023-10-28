const Card = ({ name, slug, img, desc, tech, link, repo }) => {
  return (
    <>
      <div className="mx-3">
        <ul className="nav nav-pills card-header-pills bg-secondary-subtle border rounded-top border-bottom-0 p-1">
          <li className="nav-item">
            <a className="btn btn-outline-primary text-light" href={link} target="_blank">App</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-primary text-light mx-1" href={repo} target="_blank">Repo</a>
          </li>
        </ul>
        <div class="card text-light border-light-subtle">
          <img src={img} class="card-img opacity-50" alt={name} />
          <div class="card-img-overlay text-shadow overflow-auto">
            <h5 class="card-title fs-3">{name}</h5>
            <p class="card-text fs-5">{desc}</p>
            <p class="card-text position-absolute bottom-10 start-10"><small>{tech.join(", ")}</small></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card