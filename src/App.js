import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import Lista from "./components/Lista.jsx";
import { Row,Col,Grid } from 'react-bootstrap';


class App extends Component {
	
	constructor(){
		super();
		this.state = {
			"elementosDeListaCarros":[],
			"textoDeInput":[]
		}
	}
	
	eventoPrueba(){
		alert("Agregamos un caracter al input")
	}
	
	render() {

    return (
     <div className="App">

		
		<input type="text" onChange={this.eventoPrueba}/>
		<button>Agregar</button>
		
		
		{/* Listas */}
		<Lista titulo="Carros" elementosDeLista={["ford","chevy"]}/>
		
		
	
	</div>
    );
  }
}

export default App;
