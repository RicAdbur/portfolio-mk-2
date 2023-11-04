import { NavLink } from "react-router-dom"

const Navbar = () => {

  const dynamicNavClass = ({ isActive }) => {
    const activeClass = isActive ? "active" : ""
    return `btn btn-lg btn-mobile btn-outline-primary text-light ${activeClass}`
  }

  return (
    <nav className="navbar sticky-top d-flex justify-content-center border-bottom border-light-subtle gap-3 p-3 mb-4 bg-secondary-subtle">

      <NavLink 
        to="/" 
        className={dynamicNavClass}
      >
        About Me
      </NavLink>

      <NavLink 
        to="projects" 
        className={dynamicNavClass}
      >
        Projects
      </NavLink>

      <NavLink 
        to="resume" 
        className={dynamicNavClass}
      >
        Resumé
      </NavLink>

      <NavLink 
        to="contact" 
        className={dynamicNavClass}
      >
        Contact
      </NavLink>

    </nav>
  )
};

export default Navbar