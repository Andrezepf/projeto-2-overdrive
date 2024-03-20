import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navcor">
        <div className="container-fluid">
          <Link to="/" className="text-link" id="seulogo"></Link>

          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul ">
              <li className="nav-item">
                <NavLink to="/pessoa" className={({isActive}) => (isActive ? "text-link ativo btn btn-lg navb" : "text-link btn btn-lg navb")}>Pessoas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/empresa" className={({isActive}) => (isActive ? "text-link ativo btn btn-lg navb" : "text-link btn btn-lg navb")}>Empresas</NavLink>
              </li>
            </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar