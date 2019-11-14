import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Css_login } from './style';
import api from '../../services/api';

export default function Login({ history }) {
    const [user, setUser] = new useState("")
  
    async function handleSubmit(event) {
      event.preventDefault()
  
      const result = await api.post("/", {
        email: user
      })
      localStorage.setItem("user", result.data._id)
  
      history.push("/")
}

    return (
        <Css_login>
            <section className="background">
                <div className="main_div">
                    <div className="div_efeito_1">
                        <div className="div_efeito_2">
                            <div className="div_efeito_3">
                                <div className="ajuda_tf">
                                <div className="tanto-faz">

                                    <div className="div_form">
                                        <label>
                                            Email:
                    </label>

                                    </div>
                                    <div className="div_form">
                                        <label>
                                            Senha:
                    </label >

                                    </div>
                                </div>
                                <div className="div_inputs">
                                    <input type="text" placeholder="Email..." required></input>
                                    <input type="password" placeholder="Senha..." required></input>

                                </div>
                                </div>
                                <div className="div_botao">
                                    <button className="botao">
                                        <label className="txt_botao">
                                            entrar
                                    </label>
                                    </button>
                                    <Link to="../Cadastrar">
                                        <button className="botao2">
                                            <label className="txt_botao">
                                                cadastrar-se
                                    </label>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Css_login >
    );
}
