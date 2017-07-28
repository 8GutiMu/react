import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import Lista from "./components/Lista.jsx";
import { Row,Col,Grid } from 'react-bootstrap';


class App extends Component {
  render() {
	  
	constructor(){
		this.state = {
			elementosDeListaCarros = []
		}
	}
    return (
     <div className="App">

		<Menu itemsMenu={["HOME","ABOUT US","CONTACT"]}/>
		<h1>Hola Mundo</h1>
		
	 	{/* Para usar el grid */}

		<Grid>
			<Row className="show-grid">
			  <Col  md={8}>Col4</Col>
			  <Col  md={4}>col4</Col>
			</Row>
		</Grid>
		
		
		
		{/* Listas */}
		<Lista titulo="Carros" elementosDeLista={["ford","chevy"]}/>
		
		<Lista titulo="Super HEroes" elementosDeLista={["batman","superman","hola"]}/>
			
	  	<Lista titulo="Colores" elementosDeLista={["azul","rosa","morado","amarillo"]}/>
		
			
		
		<Footer colorTexto="rgb(0,250,3)" textoFooter= "1 Adios Mundo" />
		<Footer colorTexto="#e3e3e3" textoFooter= "2 Adios Mundo"/>
		<Footer colorTexto="red" textoFooter= "3 Adios Mundo"/>
	
	</div>
    );
  }
}

export default App;
