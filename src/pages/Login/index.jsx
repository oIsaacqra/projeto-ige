import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { useState } from "react";
import api from "../../services/api";

const Usuario = () => {
 
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async () =>{
    try{
      const response = await api.post('login',{email: email, senha: senha})
      alert(`${response.data.nome} Usuario Logado!`)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  const listarUsuario = async () => {
    try{
      const response = await api.get("users",{});

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

return(
           
  <div className="app-container">
      <div class="container">
        <div class="form">
            <form action="#" id="cadForm">
                <div class="form-header">
                    <div className="title">
                        <h1>Cadastre-se</h1>
                    </div>
                </div>

                <div class="input-group continue-button">
                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required onChange={(e)=>setSenha(e.target.value)}/>
                    </div>
                    <button onClick={handleSubmit} className="button">cadastrar-se</button>
                    <div className="login">
                      <p>Não tem cadastro? <b>Cadastre-se</b></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>

)

}

export default Usuario;