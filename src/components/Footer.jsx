import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom d-flex justify-content-center gap-4 p-3 bg-secondary-subtle border-top border-light-subtle">

      <Link 
        to="https://github.com/RicAdbur"
        className="text-light text-decoration-none"
      >
        Github
      </Link>

      <Link 
        to="https://www.linkedin.com/in/maxwell-rice-289639294/"
        className="text-light text-decoration-none"
      >
        LinkedIn
      </Link>

      <Link 
        to="https://stackoverflow.com/users/22129944/ric-adbur"
        className="text-light text-decoration-none"
      >
        Stack Overflow
      </Link>

    </nav>
  )
}

export default Footer