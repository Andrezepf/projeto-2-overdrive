import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
        <h1>Projeto 2</h1>
        <h2><Link to="/index">Index</Link></h2>
        <h2><Link to="/empresa">Empresa</Link></h2>
        <h2><Link to="/pessoa">Pessoa</Link></h2>
    </nav>
    </div>
  )
}

export default Navbar