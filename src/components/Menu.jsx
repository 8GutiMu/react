import React from "react"
import ItemLista from "./ItemLista.jsx"

export default class Menu extends React.Component{
	render(){
		let itemsDeMenu = this.props.itemsMenu.map(
			(stringMenu) => {
				return(
					<ItemLista textoLi ={stringMenu}></ItemLista>
				)
			}
		)
		
		return(
			<nav>
			 {itemsDeMenu}
			</nav>
		)
	}
}