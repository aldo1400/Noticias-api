import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

class App extends Component {

  state={
    noticias:[]
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias=(categoria='general')=>{
    let url=`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=7851e90211da40f7a05ea0d595a0f719`;
    
    fetch(url)
      .then(respuesta=>{
        return respuesta.json();
      })
      .then(noticias=>{
        this.setState({
          noticias:noticias.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header
            titulo='Noticias'
        />
        <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />
            <Noticias
              noticias={this.state.noticias}
            />
        </div>
      </div>
    );
  }
}

export default App;
