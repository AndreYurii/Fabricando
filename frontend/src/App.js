import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import ApiService from './ApiService';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
        autores: [],
    };
  }

  removeAutor = id =>{
    const { autores } = this.state;
  
    this.setState( 
      {
        autores : autores.filter((autor) => {
          return autor.id !== id;
  
        }),
      }
    );
    ApiService.removeAutor(id);
  } 

  escutadorDeSubmit = autor => {
    ApiService.salvarPessoa(JSON.stringify(autor))
              .then(res => res)
              .then(autor => {
              this.setState({ autores:[...this.state.autores, autor]})  
              })

    
  }


  componentDidMount(){
    ApiService.listaOperador()
        .then(res => {this.setState({autores: [...this.state.autores, ...res] })
        });
  }
    
render(){

  ApiService.listaOperador().then(res => console.log(res.data));

  return (
    <Fragment>
      <Header />
      <div className="container mb-10">
      <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
      <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
      </div>
    </Fragment>
  );
}
}

export default App;
