import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar sticky-top d-flex justify-content-center gap-3 p-3 mb-4 bg-secondary-subtle">

      <Link to="/" className="btn btn-outline-primary text-light">About Me</Link>

      <Link to="projects" className="btn btn-outline-primary text-light">Projects</Link>

      <Link to="resume" className="btn btn-outline-primary text-light">Resumé</Link>

      <Link to="contact" className="btn btn-outline-primary text-light">Contact</Link>

    </nav>
  )
};

export default Navbar