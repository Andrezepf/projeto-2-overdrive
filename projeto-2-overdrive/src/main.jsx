import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App.jsx'
import './index.css'

import Pessoa from './pages/Pessoa.jsx'
import Empresa from './pages/Empresa.jsx'
import Home from './pages/Home.jsx'
import Index from './pages/Index.jsx'
import AddPessoa from './pages/AddPessoa.jsx'
import AddEmpresa from './pages/AddEmpresa.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import VisualizarPessoa from './pages/VisualizarPessoa.jsx'
import EditarPessoa from './pages/EditarPessoa.jsx'
import VisualizarEmpresa from './pages/VisualizarEmpresa.jsx'
import EditarEmpresa from './pages/EditarEmpresa.jsx'
import ScrollToTop from './Hooks/ScrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
      <div className="container">
        <Routes>
            <Route element={<App/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/index' element={<Index/>}/>
              <Route path='/empresa' element={<Empresa/>}/>
              <Route path='/pessoa' element={<Pessoa/>}/>
              <Route path='/pessoa/adicionarpessoa' element={<AddPessoa/>}/>
              <Route path='/empresa/adicionarempresa' element={<AddEmpresa/>}/>
              <Route path='/pessoa/visualizarpessoa/:id' element={<VisualizarPessoa/>}/>
              <Route path='/pessoa/editarpessoa/:id' element={<EditarPessoa/>}/>
              <Route path='/empresa/visualizarempresa/:id' element={<VisualizarEmpresa/>}/>
              <Route path='/empresa/editarempresa/:id' element={<EditarEmpresa/>}/>
            </Route>              
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
