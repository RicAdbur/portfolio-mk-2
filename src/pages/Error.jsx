import { useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
    <Navbar />
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center border border-danger-subtle rounded p-4">
        <h1>⚠</h1>
        <p className="mt-3">Oops! Something went wrong.</p>
        {error && (
          <p className="text-danger mt-3">{error.message}</p>
        )}
      </div>
    </div>
    </>
  )
}

export default ErrorPage