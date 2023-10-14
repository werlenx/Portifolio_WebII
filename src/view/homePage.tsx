import "./home.page.css";
import React, { useState } from "react";

export default function Login() {
  return (
    <div className="container">
      <h1>finance</h1>
      <div className="cardLogin">
        <div className="banner">
          <h2>
            simule Seu <br /> financiamento
          </h2>
          <p>
            Escolha as melhores confições para o fiananciamneto do seu veivulo
          </p>
        </div>
        <div className="formulario">
          <form action="">
            <input type="text" placeholder="Valor" />
            <input type="text" placeholder="Selecione um banco" />
            <input type="text" placeholder="numero de parcelas" />
          </form>
        </div>
      </div>
    </div>
  );
}
