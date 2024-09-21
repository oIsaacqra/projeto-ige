import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Funcionario from './pages/Funcionario';
import ListaUsuario from './pages/ListaUsuario';
import Login from './pages/Login';
import Registro from './pages/Registro';


function RoutesApp(){
 return(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/funcionario" element={<Funcionario/>}/>
                <Route path="/lista" element={<ListaUsuario/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
            </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;
