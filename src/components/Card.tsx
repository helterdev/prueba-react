import "./Card.css";

interface CardData {
	id?: number;
	title?: string;
	description?: string;
	author?: string;
}

interface CardProps {
	data: CardData;
}

export const Card = ({ data }: CardProps) => {
	const { id, author, description, title } = data;
	return (
		<li className="card-body" id={id?.toString()}>
			<h3>{title}</h3>
			<span>{author}</span>
			<p>{description}</p>
		</li>
	);
};
