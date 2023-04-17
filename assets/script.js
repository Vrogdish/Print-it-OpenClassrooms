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


/** Récuperation des éléments du document */
const image = document.querySelector(".banner-img");
const text = document.querySelector(".banner, p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");


/** Création d'un index du slide à afficher */
let nbrOfActivSlide = 0;


/** Fonction pour création des points d'apres le nombre de slide */
const dotGenerator = () => {
	for (let i in slides) {
		const dotsElement = document.createElement("div");
		dotsElement.classList.add("dot")
		if (i == nbrOfActivSlide){
			dotsElement.classList.add("dot_selected");
		}
		dots.appendChild(dotsElement)
	}
	}


/** Fonction pour defilement du slide */
const slideGenerator = () => {
	image.setAttribute("src", `./assets/images/slideshow/${slides[nbrOfActivSlide].image}`);
	text.innerHTML = slides[nbrOfActivSlide].tagLine
}


/** Initialisation de l affichage du point */
dotGenerator ()


//** Mise en place des actions à effectuer au clic sur les chevrons */
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




