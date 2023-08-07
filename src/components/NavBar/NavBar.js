import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';
import { useRef } from "react";

const NavBar = () => {

  const linkProds = ['Pianos', 'Guitarras', 'Bajos', 'Baterías', 'Micrófonos', 'Saxofónes', 'Consolas'];

  const navBarRef = useRef();
  const navBarTogglerRef = useRef();

  const hideNavBar = () => {
    navBarRef.current.classList.remove('show');
    navBarTogglerRef.current.classList.add('collapsed');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex flex-lg-row-reverse">
        <button ref={navBarTogglerRef} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <CartWidget />

        <div ref={navBarRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} onClick={hideNavBar} className="nav-link">Todos los Producto</NavLink>
            </li>
            {linkProds.map((prod, i) => {
              return <li className="nav-item" key={i}>
                <NavLink to={`/category/${prod}`} onClick={hideNavBar} className="nav-link">{prod}</NavLink>
              </li>
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;