import React from "react"

export default class Footer extends React.Component{
	render(){
		let estilos = {
			color: this.props.colorTexto
		}
		return(
		 <footer style={estilos}>{this.props.textoFooter}</footer>
		)
	}
}