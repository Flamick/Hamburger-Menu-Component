const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
let menuOpen = false;
let isTransitioning = false;
menuBtn.addEventListener("click", () => {
	const lastMenuItem = mobileMenu.lastElementChild.lastElementChild;
	if (isTransitioning) {
		return;
	} else if (!menuOpen) {
		isTransitioning = true;
		mobileMenu.classList.remove("closed");
		menuBtn.classList.add("open");
		mobileMenu.classList.add("open");
		menuOpen = true;
		lastMenuItem.addEventListener("transitionend", () => {
			isTransitioning = false;
		});
	} else {
		isTransitioning = true;
		menuBtn.classList.remove("open");
		mobileMenu.classList.remove("open");
		mobileMenu.classList.add("closed");
		menuOpen = false;
		lastMenuItem.addEventListener("transitionend", () => {
			isTransitioning = false;
		});
	}
});
