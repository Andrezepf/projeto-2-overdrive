import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AddPessoa = () => {
  const [empresas, setEmpresas] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/empresas", requestOptions)
      .then((response) => response.json())
      .then((result) => setEmpresas(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div id="edit-profile">
          <h2>Informações da pessoa: </h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome:</label>
              <input type="text" className="form-control" placeholder='Insira o nome...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">CPF:</label>
              <input type="text" className="form-control" placeholder='Insira o CPF...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" placeholder='Insira o telefone...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Usuário:</label>
              <input type="text" className="form-control" placeholder='Insira o usuário...'/>
            </div>
            

              
            <label className="form-label">Situação:</label>
            <select class="form-select" aria-label="Default select example">
            <option value="1" selected>Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
            </select>
            <label className="form-label">Empresa:</label>
            <select class="form-select" aria-label="Default select example">
            {empresas.map((empresa) => (
              <option value={empresa.id}>{empresa.nomefantasia}</option>
            ))}
            
          </select>
          <Link to="/pessoa"><button type="submit" className="btn btncor m-2">Criar</button></Link>
          <Link to="/pessoa"><button type="submit" className="btn btncor m-2">Voltar</button></Link>
          </form>
        </div>
  )
}

export default AddPessoa