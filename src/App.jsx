import "./App.css";
import Header from "./components/Header";
import React from "react";
import Galery from "./components/Galery";
import Footer from "./components/Footer";
const data = {
	title: "Adopta un perrito",

	perros: [
		{
			nombre: "Max",
			imagen: "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/fdecc7f0-42bf-4696-bd4c-73a868e5d1d2/81.jpg",
			edad: "5 meses",
			raza: "Golden Retriever",
			etiqueta: { text: "Amigable", color: "bg-success" },
		},
		{
			nombre: "Bella",
			imagen: "https://a.storyblok.com/f/83829/1200x628/92138933ce/esperance-vie-labrador-retriever.jpg",
			edad: "4 meses",
			raza: "labrador",
			etiqueta: { text: "tranquila", color: "bg-primary " },
		},
		{
			nombre: "Rocky",
			imagen: "https://i.ytimg.com/vi/iTyJeP4niLY/maxresdefault.jpg",
			edad: "3 meses",
			raza: "Bulldog",
			etiqueta: { text: "jugueton", color: "bg-secondary" },
		},
		{
			nombre: "cali",
			imagen: "https://estaticos-cdn.prensaiberica.es/clip/92ffe9bd-c6b3-4908-97c6-cff3dca8eb99_16-9-aspect-ratio_default_1238471.jpg",
			edad: "3 meses",
			raza: "salchicha",
			etiqueta: { text: "Cariñosa", color: "bg-info" },
		},
	],
};

const App = () => {
	return (
		<div className="logo">
			<Header title={data.title}></Header>
			<div>
				<Galery perros={data.perros}></Galery>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default App;
