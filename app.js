const content = document.querySelectorAll(".project-section");

window.addEventListener("scroll", easeContent);
easeContent();

function easeContent() {
	const bottomOfScreen = window.innerHeight * 0.8;

	content.forEach((contents) => {
		const topOfContent = contents.getBoundingClientRect().top;
		topOfContent < bottomOfScreen
			? contents.classList.add("appear")
			: contents.classList.remove("appear");
	});
}

const checkbox = document.getElementsByTagName("input");

window.addEventListener("scroll", checkDone);
checkDone();

function checkDone() {
	const bottomOfArea = window.innerHeight * 0.8;

	checkbox.forEach((box) => {
		const topOfCheckbox = box.getBoundingClientRect().top;
		topOfCheckbox < bottomOfScreen
			? box.classList.add("appear")
			: box.classList.remove("appear");
	});
}
