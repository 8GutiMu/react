import React from "react"
import ItemLista from "./ItemLista.jsx"

export default class Lista extends React.Component{
	render(){

		let arregloDeLis = this.props.elementosDeLista.map(
			(stringDeLista) => {
				return(
					<ItemLista textoLi={stringDeLista}></ItemLista>
				)
			}
		)
	
		return(
			<div >
				<h1>{this.props.titulo}</h1>
					<ol>
						{arregloDeLis}
					</ol>
			</div>
		)		
	}
}