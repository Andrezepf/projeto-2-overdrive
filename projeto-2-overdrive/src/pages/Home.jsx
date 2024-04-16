const Home = () => {
  return (
    <div>
      <div className="py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header cread">
                <h1>Olá, Usuário!</h1>
              </div>
              <div className="card-body">
                <p>Seja bem vindo à minha aplicação.</p>
                <p>Esse projeto consiste no Front-end para um CRUD de pessoas e empresas sem a necessidade de fazer login. Neste estágio ele ainda não possui back-end então muitas das funções são apenas visuais. </p>
                <p>Para começar a usá-lo basta usar os botões "Pessoas" e "Empresas" no topo da página. Espero que goste ;)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Home