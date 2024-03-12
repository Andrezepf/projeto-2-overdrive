import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navcor">
        <div className="container-fluid">
          <Link to="/index" className="text-link" id="seulogo">SEU LOGO</Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul ">
              <li className="nav-item">
                <Link to="/pessoa" className="text-link"><button type="button" class="btn btn-lg navb">Pessoas</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/empresa" className="text-link"><button type="button" class="btn btn-lg navb">Empresas</button></Link>
              </li>
            </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar