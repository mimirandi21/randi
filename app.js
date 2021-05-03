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
