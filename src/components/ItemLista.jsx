import React from "react"

export default class ItemLista extends React.Component{
	render(){
		
		return(
			<li>{this.props.textoLi}</li>
		)
	}
}