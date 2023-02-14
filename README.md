# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

Desktop 
![](./screenshots/Coding%20Slider%20-%20First%20Card%20Deskop.png)

![](./screenshots/Coding%20Slider%20-%20Second%20Card%20Deskop.png)

Mobile  
![](./screenshots/Coding%20Slider%20-%20First%20Card%20Mobile.png)

![](./screenshots/Coding%20Slider%20-%20Second%20Card%20Mobile.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](sass-lang.com) - CSS Preprocessor


### What I learned

The goal of the project was to navigate through the 2 available slides. At first I thought about using the HTML to storage the info, but then I thought JavaScript objects would work better. Now I only need to style one card and dynamically replace the information inside them through functions.

The card structure:
```html
    <section class="card-wrapper">
      <div class="avatar">
        <img id="author-img" src="" alt="">
        <div class="navigation">
            <button id="preview" aria-label="Preview" tabindex="0">
                <img src="./images/icon-prev.svg" alt="">
            </button>
            <button id="next" aria-label="Next" tabindex="0">
                <img src="./images/icon-next.svg" alt="">
            </button>
        </div>
      </div>

      <div class="text">
        <p>“ <span class="testimony">Text</span> ”</p>

        <div class="author-info">
          <h1 class="name">Name</h1>
          <h2 class="profession">Profession</h2>
        </div>
      </div>
    </section>
```


The data to feed the HTML tags:
```js
const testimonials = [
    {
        id: 1,
        img: "./images/image-tanya.jpg",
        alt: "Tanya on her left side facing the camera with her right hand on her right cheek.",
        author: "Tanya Sinclair",
        profession: "UX Engineer",
        testimony:"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    },
    {
        id: 2,
        img: "./images/image-john.jpg",
        alt:"John half way to his left side facing the camera with his arms crossed on his chest.",
        author: "John Tarkpor",
        profession: "Junior Front-end Developer",
        testimony:"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    }
];
```

That alone does not work. A link between them is needed. So I linked them through the variables below:
```js
const img = document.querySelector("#author-img");
const author = document.querySelector(".name");
const profession = document.querySelector(".profession");
const testimony = document.querySelector(".testimony");
const prevBtn = document.querySelector("#preview");
const nextBtn = document.querySelector("#next");
```

The tricky part was setting up the arrows navigation. I ended up with the code below, but it is deprecated. I could not figure out how to do this with the new features.
```js
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 37){
        console.log(e.key)
        previousCard();
    }
    else if ((e.keyCode == 39)){
        nextCard();
    }
});
```

### Useful resources

- [JavaScript Project: Card Slider](https://medium.com/codex/javascript-bitesize-card-slider-ee3ab8b179d8) - After watching a lot of tutorials on how to build the slider (most of them with frameworks), I found this article where the author, [Damla Erkiner](https://medium.com/@derkiner), explains in details how to do it with vanilla JS.

- [Toptal JavaScript Key Code](https://www.toptal.com/developers/keycode) - I used this website to find the keycode of the keyboard arrows.

## Author

- Frontend Mentor - [@nicoams](https://www.frontendmentor.io/profile/nicoams)