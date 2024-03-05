import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <h1>Projeto 2</h1>
            <ul>
              <li><Link to="/index" className="text-link">Index</Link></li>
              <li><Link to="/empresa" className="text-link">Empresa</Link></li>
              <li><Link to="/pessoa" className="text-link">Pessoa</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar