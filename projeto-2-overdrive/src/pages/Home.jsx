import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <p>Seja bem vindo blablabla clique abaixo para começar</p>
        <Link to="/index">Index</Link>

    </div>
    
  )
}

export default Home