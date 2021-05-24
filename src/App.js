import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './App.css';

class App extends Component{
 
  render() {
    return (
      <section>
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro/>
      </section>
      );
  }
}

export default App;
