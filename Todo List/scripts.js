const itemList = document.getElementById("item-list");
const input = document.getElementById("input-text");
let todoItems = ["Buy groceries", "Give the dog a bath", "Buy baby shower gift"];

function renderList() {
	clearList();
	todoItems
		.map(item => item.toLowerCase().split(" ").map(toTitleCase).join(" "))
		.forEach((elementText, key) => {
			createTodoItem(elementText, key);
		});
}

function toTitleCase(word) {
	return word.charAt(0).toUpperCase().concat(word.slice(1));
}

function clearList() {
	itemList.innerHTML = "";
}

function createTodoItem(itemText, key) {
	const todoItem = document.createElement("div");
	todoItem.className = "todo-item";

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.value = 1;
	checkbox.name = "item-complete";

	const todoText = document.createElement("p");
	todoText.innerText = itemText;

	const deleteButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete-item";
	deleteButton.onclick = () => removeItem(key);

	todoItem.appendChild(checkbox);
	todoItem.appendChild(todoText);
	todoItem.appendChild(deleteButton);

	itemList.appendChild(todoItem);
}

function addItem() {
	const inputText = input.value;
	todoItems.push(inputText);
	renderList();
	input.value = "";
}

function removeItem(key) {
	todoItems.splice(key, 1);
	renderList();
}
