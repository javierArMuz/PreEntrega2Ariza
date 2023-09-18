import { Link } from "react-router-dom";
import './iconTitle.css'

const IconTitle = () => {
  return (
    <div className="titleStrip py-3 d-flex justify-content-center align-items-center">
      <Link to={'/'} className="icono mx-2">
        <img className="w-100" src="https://cdn-icons-png.flaticon.com/512/544/544076.png" alt="ícono de la tienda" />
      </Link>
      <h1 className="mx-1">Casa De Instrumentos Musicales</h1>
    </div>
  )
}
export default IconTitle;