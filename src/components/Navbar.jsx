import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-center gap-3 p-3 bg-dark">

      <Link to="/" className="btn btn-outline-primary text-light">About Me</Link>

      <Link to="projects" className="btn btn-outline-primary text-light">Projects</Link>

      <Link to="resume" className="btn btn-outline-primary text-light">Resume</Link>

      <Link to="contact" className="btn btn-outline-primary text-light">Contact</Link>

    </nav>
  )
};

export default Navbar;