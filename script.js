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

const img = document.querySelector("#author-img");
const author = document.querySelector(".name");
const profession = document.querySelector(".profession");
const testimony = document.querySelector(".testimony");
const prevBtn = document.querySelector("#preview");
const nextBtn = document.querySelector("#next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function (){
    const item = testimonials[currentItem];
    img.src = item.img;
    img.alt = item.alt;
    author.textContent = item.author;
    profession.textContent = item.profession;
    testimony.textContent = item.testimony;
});

function showAuthor(person){
    const item = testimonials[currentItem];
    img.src = item.img;
    img.alt = item.alt;
    author.textContent = item.author;
    profession.textContent = item.profession;
    testimony.textContent = item.testimony;
}

function previousCard(){
    currentItem --;
    if(currentItem < 0){
        currentItem = testimonials.length-1;
    }
    showAuthor(currentItem);
};

function nextCard(){
    currentItem ++;
    if(currentItem > testimonials.length-1){
        currentItem = 0;
        }
    showAuthor(currentItem);
};

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 37){
        console.log(e.key)
        previousCard();
    }
    else if ((e.keyCode == 39)){
        nextCard();
    }
});
prevBtn.addEventListener("click", previousCard);
nextBtn.addEventListener("click", nextCard);