# Frontend Mentor - Easybank landing page solution

[Live site](https://easybank-landing-page-isaac.netlify.app/)

![Project preview](design/desktop-preview.jpg)

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Easybank landing page solution](#frontend-mentor---easybank-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

- [Mobile](design/mobile-design.jpg)
- [Desktop](design/desktop-design.jpg)
- [Active states](design/active-states.jpg)

### Links

- [Live site](https://easybank-landing-page-isaac.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I have practice scroll animations with the help of the IntersectionObserver API. It was awesome to realize that the code below can cause a bug if more than one element is observed at the same time

```js
function animateCard(entries, observer) {
	const [entry] = entries;
	if (entry.isIntersecting) {
		entry.target.classList.add("card-observer-animate");
		observer.unobserve(entry.target);
	}
}
```

If there is more than one element observed at the same time, only the first element will receive the animation, while the other won't. So I concluded that the best thing is to do the following instead:

```js
function animateCard(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("card-observer-animate");
			observer.unobserve(entry.target);
		}
	});
}
```

Here, doesn't matter how many elements are observed, all of them will get the animation.

Also, I am very proud because I used the SASS for loop for the first time:

```scss
@for $i from 1 through 4 {
  &:nth-child(#{$i}) {
    transform: translateY(50px * $i); 
  }
}
```

### Continued development

I really liked working with the IntersectionObserver API, because it makes it so easy to determine what happens to an element as soon as it comes into the viewport. From now on, whenever I can, I will try to use it in my next projects so that I can practice it even more
