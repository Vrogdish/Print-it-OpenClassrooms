const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const image = document.querySelector(".banner-img");
const text = document.querySelector(".banner, p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");



let nbrOfActivSlide = 0;

function dotGenerator () {
	for (let i in slides) {
		const dotsElement = document.createElement("div");
		dotsElement.classList.add("dot")
		if (i == nbrOfActivSlide){
			dotsElement.classList.add("dot_selected");
		}
		dots.appendChild(dotsElement)
	}
	}

function slideGenerator (){
	image.setAttribute("src", `./assets/images/slideshow/${slides[nbrOfActivSlide].image}`);
	console.log(image)
	text.innerHTML = slides[nbrOfActivSlide].tagLine
}


dotGenerator ()

arrowLeft.addEventListener("click", function () {
	nbrOfActivSlide --;

	if (nbrOfActivSlide < 0) {
		nbrOfActivSlide = slides.length -1
	}

	document.querySelector(".dots").innerHTML="";
	dotGenerator ();
	slideGenerator();
})


arrowRight.addEventListener("click", function () {
	nbrOfActivSlide ++;

	if (nbrOfActivSlide >= slides.length){
		nbrOfActivSlide = 0
	}

	document.querySelector(".dots").innerHTML="";
	dotGenerator ()
	slideGenerator()
})




