const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', function () {
    navbarLinks.style.backgroundColor = 'green';
    navbarLinks.classList.toggle('active');
});

// slider code starts here

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};
next.addEventListener('click', function () {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', function () {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}


// customer review script starts here

const myreview = [
    {
        id: 1,
        name: "Vijay Kumar",
        img: "images/team-1.jpg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tempora nobis! Odio delectusculpa asperiores! Perferendis quasi minima possimus tempore ea. Dolores voluptatum nihillaborum. Il soluta amet fugiat architecto! Animi, ut ipsam fugit dicta debitis corrupti",
    },

    {
        id: 2,
        name: "Kapil Kumar",
        img: "images/team-2.jpg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tempora nobis! Odio delectusculpa asperiores! Perferendis quasi minima possimus tempore ea. Dolores voluptatum nihillaborum. Il soluta amet fugiat architecto! Animi, ut ipsam fugit dicta debitis corrupti",
    },
    {
        id: 3,
        name: "Seema Kumar",
        img: "images/team-3.jpg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tempora nobis! Odio delectusculpa asperiores! Perferendis quasi minima possimus tempore ea. Dolores voluptatum nihillaborum. Il soluta amet fugiat architecto! Animi, ut ipsam fugit dicta debitis corrupti",
    },
    {
        id: 4,
        name: "Neha Kumar",
        img: "images/team-4.jpg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tempora nobis! Odio delectusculpa asperiores! Perferendis quasi minima possimus tempore ea. Dolores voluptatum nihillaborum. Il soluta amet fugiat architecto! Animi, ut ipsam fugit dicta debitis corrupti",
    },

]



const image = document.querySelector('#cust-img');
const name = document.querySelector('#name');
const info = document.querySelector('#info');
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

let currentReview = 0;
window.addEventListener("DOMContentLoaded", function () {
    showReview();
})

function showReview() {
    const review = myreview[currentReview];
    image.src = review.img;
    name.textContent = review.name;
    info.textContent = review.info;
}


nextButton.addEventListener('click', function () {
    currentReview++;
    if (currentReview > myreview.length - 1) {
        currentReview = 0;
    }
    showReview();
})

prevButton.addEventListener('click', function () {
    currentReview--;
    if (currentReview < 0) {
        currentReview = myreview.length - 1;
    }
    showReview();
})
