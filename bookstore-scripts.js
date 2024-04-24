import { books } from "./books.js";

const bookList = document.getElementById("book-list");

function renderBookList(bookArray) {
	clearBookList();

	bookArray.forEach(book => {
		let bookCard = document.createElement("div");
		bookCard.className = "book-card";

		let bookImg = document.createElement("img");
		bookImg.src = book.imageLink;
		bookImg.alt = book.title + " cover";
		bookImg.className = "book-cover";

		let textBlock = document.createElement("div");
		textBlock.className = "text";

		let title = document.createElement("p");
		title.innerText = book.title.slice(0, 30);
		title.className = "title";

		let author = document.createElement("p");
		author.innerText = book.author;
		author.className = "author";

		let price = document.createElement("p");
		price.innerText = "$24.99";
		price.className = "price";

		textBlock.appendChild(title);
		textBlock.appendChild(author);
		textBlock.appendChild(price);

		bookCard.appendChild(bookImg);
		bookCard.appendChild(textBlock);

		bookList.appendChild(bookCard);
	});
}

function clearBookList() {
	bookList.innerHTML = "";
}

function filterShortBooks() {
	return books.filter(book => {
		return book.pages <= 300;
	});
}

function filterMedBooks() {
	return books.filter(book => {
		return book.pages > 300 && book.pages <= 500;
	});
}

function filterLongBooks() {
	return books.filter(book => {
		return book.pages > 500;
	});
}

function sortByOldest() {
	return books.sort((a, b) => {
		return a.year - b.year;
	});
}

renderBookList(books);

document.getElementById("short-books").addEventListener("click", () => {
	renderBookList(filterShortBooks());
});

document.getElementById("med-books").addEventListener("click", () => {
	renderBookList(filterMedBooks());
});

document.getElementById("long-books").addEventListener("click", () => {
	renderBookList(filterLongBooks());
});

document.getElementById("oldest").addEventListener("click", () => {
	renderBookList(sortByOldest());
});

document.getElementById("newest").addEventListener("click", () => {
	renderBookList(sortByOldest().reverse());
});
