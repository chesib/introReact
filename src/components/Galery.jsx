import React from "react";
import Card from "./Card";

const Galery = ({ perros }) => {
	return (
		<div className="galeria">
			<Card perros={perros[0]}></Card>
			<Card perros={perros[1]}></Card>
			<Card perros={perros[2]}></Card>
			<Card perros={perros[3]}></Card>
		</div>
	);
};

export default Galery;
