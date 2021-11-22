"use strict";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksBG = document.querySelector(".nav-links-bg");
const body = document.body;

hamburger.addEventListener("click", (event) => {
	event.currentTarget.classList.toggle("hamburger-active");
	navLinks.classList.toggle("nav-links-active");
	navLinksBG.classList.toggle("nav-links-bg-active");
	body.classList.toggle("hide-scroll-bar");
});
