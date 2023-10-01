import Badge from "react-bootstrap/Badge";

function TagsBoostrap({ data }) {
	console.log(data.color);
	return (
		<div>
			<Badge className={data.color}>{data.text}</Badge>
		</div>
	);
}

export default TagsBoostrap;
