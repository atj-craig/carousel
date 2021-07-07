let slides = document.getElementsByClassName("slides"),
		lastSlide = slides.length - 1;
		numSlides = 3;

const moveSlides = (n) => {
	slides[0].removeEventListener("click", moveLeft);
	slides[2].removeEventListener("click", moveRight);
	if (n == 1) {shiftRight()
	} else if (n == -1) {shiftLeft()}
	slides[0].addEventListener("click", moveLeft);
	slides[2].addEventListener("click", moveRight);
}

const shiftRight = () => {
	for (let i = 0; i < numSlides; i++) {
		if (i < numSlides - 1) {
			slides[i].classList.remove(`slide-${i}`);
			slides[i].classList.add(`slide-${i+1}`);
		} else {
			slides[i].classList.remove(`slide-${i}`);
			slides[i].classList.add(`slide-off`);
		}
	}
	slides[lastSlide].parentNode.insertBefore(slides[lastSlide], slides[0]);
	slides[0].classList.remove("slide-off");
	slides[0].classList.add("slide-0");
}

const shiftLeft = () => {
	for (let i = numSlides; i > 0; i--) {
		if (i == numSlides) {
			slides[i].classList.remove("slide-off");
			slides[i].classList.add(`slide-${i-1}`);
		} else if (i > 0 && i < numSlides) {
			slides[i].classList.remove(`slide-${i}`);
			slides[i].classList.add(`slide-${i-1}`);
		}
	}
	slides[0].parentNode.appendChild(slides[0]);
	slides[lastSlide].classList.remove("slide-0");
	slides[lastSlide].classList.add("slide-off");
}

let moveLeft = () => moveSlides(-1),
		moveRight = () => moveSlides(1);

slides[0].addEventListener("click", moveLeft);
slides[2].addEventListener("click", moveRight);