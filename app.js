"use strict";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksBG = document.querySelector(".nav-links-bg");
const body = document.body;
const secondSectionCards = document.querySelectorAll(".second-section-container .cards-block .card");
const thirdSectionCards = document.querySelectorAll(".third-section-container .cards-block .card");
const footer = document.querySelector("footer");

hamburger.addEventListener("click", (event) => {
	event.currentTarget.classList.toggle("hamburger-active");
	navLinks.classList.toggle("nav-links-active");
	navLinksBG.classList.toggle("nav-links-bg-active");
	body.classList.toggle("hide-scroll-bar");
});

const options = {
	root: null,
	threshold: 0.5,
};

function animateCard(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("card-observer-animate");
			observer.unobserve(entry.target);
		}
	});
}
const cardObserver = new IntersectionObserver(animateCard, options);

secondSectionCards.forEach((card) => cardObserver.observe(card));
thirdSectionCards.forEach((card) => cardObserver.observe(card));

const footerObserver = new IntersectionObserver(animateFooter, options);

footerObserver.observe(footer);

function animateFooter(entries, observer) {
	const [entry] = entries;
	if (entry.isIntersecting) {
		entry.target.classList.add("footer-observer-animate");
		observer.unobserve(entry.target);
	}
}
