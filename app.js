const content = document.querySelectorAll(".project-section");
const svgs = document.querySelectorAll(".svg");

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

	svgs.forEach((svg) => {
		const topOfSvg = svg.getBoundingClientRect().top;
		topOfSvg < bottomOfScreen
			? svg.classList.add("animate")
			: svg.classList.remove("animate");
	});
}
(function ($) {
	$.fn.letterDrop = function () {
		// Chainability
		return this.each(function () {
			var obj = $(this);

			var drop = {
				arr: obj.text().split(""),

				range: {
					min: 1,
					max: 9,
				},

				styles: function () {
					var dropDelays = "\n",
						addCSS;

					for (i = this.range.min; i <= this.range.max; i++) {
						dropDelays += ".ld" + i + " { animation-delay: 1." + i + "s; }\n";
					}

					addCSS = $("<style>" + dropDelays + "</style>");
					$("head").append(addCSS);
				},

				main: function () {
					var dp = 0;
					obj.text("");

					$.each(this.arr, function (index, value) {
						dp = dp.randomInt(drop.range.min, drop.range.max);

						if (value === " ") value = "&nbsp"; //Add spaces

						obj.append(
							'<span class="letterDrop ld' + dp + '">' + value + "</span>"
						);
					});
				},
			};

			Number.prototype.randomInt = function (min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			};

			// Create styles
			drop.styles();

			// Initialise
			drop.main();
		});
	};
})(jQuery);

// USAGE
$("h1").letterDrop();
// window.onload = function () {
// 	animateSequence();
// 	animateRandom();
// };

// function animateSequence() {
// 	var a = document.getElementsByClassName("sequence");
// 	for (var i = 0; i < a.length; i++) {
// 		var $this = a[i];
// 		var letter = $this.innerHTML;
// 		letter = letter.trim();
// 		var str = "";
// 		var delay = 100;
// 		for (l = 0; l < letter.length; l++) {
// 			if (letter[l] != " ") {
// 				str +=
// 					'<span style="animation-delay:' +
// 					delay +
// 					"ms; -moz-animation-delay:" +
// 					delay +
// 					"ms; -webkit-animation-delay:" +
// 					delay +
// 					'ms; ">' +
// 					letter[l] +
// 					"</span>";
// 				delay += 150;
// 			} else str += letter[l];
// 		}
// 		$this.innerHTML = str;
// 	}
// }

// const checkbox = document.getElementsByTagName("input");

// window.addEventListener("scroll", checkDone);
// checkDone();

// function checkDone() {
// 	const bottomOfArea = window.innerHeight * 0.8;

// 	checkbox.forEach((box) => {
// 		const topOfCheckbox = box.getBoundingClientRect().top;
// 		topOfCheckbox < bottomOfScreen
// 			? box.classList.add("appear")
// 			: box.classList.remove("appear");
// 	});
// }
