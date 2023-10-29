import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar sticky-top d-flex justify-content-center border-bottom border-light-subtle gap-3 p-3 mb-4 bg-secondary-subtle">

      <NavLink 
        to="/" 
        className={({ isActive }) =>
        [
          isActive ? "active btn btn-lg btn-outline-info text-light" : "btn btn-lg btn-outline-primary text-light",
        ].join(" ")
      }
      >
        About Me
      </NavLink>

      <NavLink 
        to="projects" 
        className={({ isActive }) =>
        [
          isActive ? "active btn btn-lg btn-outline-info text-light" : "btn btn-lg btn-outline-primary text-light",
        ].join(" ")
      }
      >
        Projects
      </NavLink>

      <NavLink 
        to="resume" 
        className={({ isActive }) =>
        [
          isActive ? "active btn btn-lg btn-outline-info text-light" : "btn btn-lg btn-outline-primary text-light",
        ].join(" ")
      }
      >
        Resumé
      </NavLink>

      <NavLink 
        to="contact" 
        className={({ isActive }) =>
        [
          isActive ? "active btn btn-lg btn-outline-info text-light" : "btn btn-lg btn-outline-primary text-light",
        ].join(" ")
      }
      >
        Contact
      </NavLink>

    </nav>
  )
};

export default Navbar