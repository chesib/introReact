const Header = (data) => {
	return (
		<header>
			<div className="navbar">
				<h2>{data.title}</h2>
				<a href="#">Acerca de</a>
				<a href="#">Servicios</a>
				<a href="#">Contacto</a>
			</div>
		</header>
	);
};

export default Header;
