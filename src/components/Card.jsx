import React from "react";
import TagsBoostrap from "./TagsBoostrap";
const Card = ({ perros }) => {
	return (
		<div className="card">
			<img src={perros.imagen} alt="error"></img>
			<div className="card-content">
				<h2 className="card-title">{perros.nombre}</h2>
				<p className="card-info">{perros.edad}</p>
				<p className="card-info">{perros.raza}</p>
			</div>
			<TagsBoostrap data={perros.etiqueta}></TagsBoostrap>
		</div>
	);
};

export default Card;
