import { useEffect, useState } from "react";
import "./App.css";
import { getAuthor, getBooks } from "./api/api";
import { Card } from "./components/Card";

export interface Author {
	id: number;
	name: string;
}

export interface Books {
	id: number;
	autorId: string;
	published: string;
	title: string;
	description: string;
}

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingBook, setIsLoadingBook] = useState(true);
	const [author, setAuthor] = useState<Author[]>([]);
	const [books, setBooks] = useState<Books[]>([]);

	useEffect(() => {
		const getdata = async () => {
			try {
				const response = await getAuthor();
				if (response.status === 200) {
					setIsLoading(false);
					setAuthor(response.data);
				}
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};

		const getdataBooks = async () => {
			try {
				const response = await getBooks();
				if (response.status === 200) {
					setIsLoadingBook(false);
					setBooks(response.data);
				}
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};

		getdata();
		getdataBooks();
	}, []);

	if (isLoading && isLoadingBook) {
		return <div>Loading...</div>;
	}

	const allData = books.map((book, index) => ({
		id: book.id,
		title: book.title,
		description: book.description,
		author: author[index]?.name,
	}));

	return (
		<>
			<section>
				<div className="main">
					<header>
						<h1>Best sellers all times</h1>
						<div>
							<input
								className="main__input"
								type="text"
								placeholder="write something to search"
							/>
						</div>
					</header>
				</div>
				<div>
					<ul className="main-card">
						{allData.map((item) => (
							<Card data={item} />
						))}
					</ul>
				</div>
			</section>
		</>
	);
}

export default App;
