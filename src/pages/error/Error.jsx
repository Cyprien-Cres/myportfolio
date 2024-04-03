import { Link } from "react-router-dom"
import "./Error.scss"

function Error() {
  return (
    <div className="error-container">
      <h1 className="title-error">404</h1>
      <p className="text">Oups! La page que vous demandez n'existe pas</p>
      <Link to="/" className="link">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  )
}

export default Error