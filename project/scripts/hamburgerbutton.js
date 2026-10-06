//MENU HAMBURGER BUTTON
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const navigation = document.querySelector('.navigationul')

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
})

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

