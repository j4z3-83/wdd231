//MENU HAMBURGER BUTTON
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigationul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});