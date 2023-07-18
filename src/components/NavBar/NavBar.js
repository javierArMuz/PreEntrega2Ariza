import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex flex-lg-row-reverse">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <CartWidget />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button id="all" className="nav-link active">Todos los Productos</button>
            </li>
            <li className="nav-item">
              <button id="piano" className="nav-link">Pianos</button>
            </li>
            <li className="nav-item">
              <button id="guitar" className="nav-link">Guitarras</button>
            </li>
            <li className="nav-item">
              <button id="bass" className="nav-link">Bajos</button>
            </li>
            <li className="nav-item">
              <button id="drums" className="nav-link">Baterías</button>
            </li>
            <li className="nav-item">
              <button id="microphone" className="nav-link">Micrófonos</button>
            </li>
            <li className="nav-item">
              <button id="saxophone" className="nav-link">Saxofónes</button>
            </li>
            <li className="nav-item">
              <button id="soundboard" className="nav-link">Consolas</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;