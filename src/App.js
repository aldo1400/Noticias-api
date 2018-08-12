import React, { Component } from 'react';
import Header from './componentes/Header';

class App extends Component {

  state={
    noticias:[]
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias=()=>{
    let url='https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=7851e90211da40f7a05ea0d595a0f719';
    
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
      <div className="App">
        <Header
        titulo='Noticias'
        />

      </div>
    );
  }
}

export default App;
