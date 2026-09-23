//MENU HAMBURGER BUTTON
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigationul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
	const currentPage = window.location.pathname.split("/").pop();

	const navLinks = document.querySelectorAll(".navigationul a");

	navLinks.forEach(link => {

		const linkTarget = link.getAttribute("href");

		if (currentPage === linkTarget || (currentPage === "" && linkTarget === "index.html")) {
			link.classList.add("active");
		}
	});
});