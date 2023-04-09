// Recuperation du bouton
const link = document.querySelector(".bouton");
// Ajout du mouseover au bouton
link.addEventListener("mouseover", function() {
    this.style.fontSize = "24px";
});
// Ajout du mouseout au bouton
link.addEventListener("mouseout", function() {
    this.style.fontSize = "20px";
});




// Récuperation et initialisation du titre pour l'animation
const titre = document.getElementById("titre");
let echelle = 1;
let delta = 0.001;
// Calibrage de la fonction pour animer le titre
function animerTitre() {
    echelle += delta;
    if (echelle >= 1.2 || echelle <= 1) {
     delta = -delta;
    }
    titre.style.transform = "scale(" + echelle + ")";
    window.requestAnimationFrame(animerTitre);
}

// Lancement animation 
animerTitre();