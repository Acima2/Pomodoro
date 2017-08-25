/*VARIABLES*/
var time = 0;
var minute = 0;
var second = 0;
var interval;
var status = "initial";
var timePeriod = "none";

/*Fonction qui démare sur le click pour lancer le temps de
travail et qui change le nom du bouton et qui met en pause*/
$(document).ready(function(){
	$("#start").click(function(){
		if (status === "initial"){
			time = 1500;
			minute = time / 60;
			second = 0;
			displayClear(second, minute);
			interval = setInterval(decremente, 1000);
			status = "demarrer";
			timePeriod = "travail";
			$("#start").text("Pause");
		} else if (status === "demarrer") {
			clearInterval(interval);
			status = "arret";
			$("#start").text("Redémarrer");
		} else {
			interval = setInterval(decremente, 1000);
			status = "demarrer";
			$("#start").text("Pause");
		}

	});

/*AVENIR EN COURS D'ELABORATION*/

/*Fonction qui remet à zéro pour le reset et qui vide 
l'interval pour ne pas lancer 2 fois le compteur*/
	$("#reset").click(function() {
		status = "initial";
		timePeriod = "none";
		time = 0;
		minute = 0;
		second = 0;
		displayClear(second, minute);
		$("#start").text("Marche");
		clearInterval(interval);
	})


}); /*fin du document.ready*/


/*Fonction qui décrémente le temps. Qui fait un 
affichage se et minutes. Qui fait passer du temps
de travail au temps de pause et vis et versa*/
function decremente(){
	if (time == 0){
		if (timePeriod === "travail") {
			timePeriod = "pause";
			time = 300;
			second = 0;
			minute = time / 60;
			clearInterval(interval);
			interval = setInterval(decremente, 1000);
			alert("Les humains disent que le Temps passe. Le Temps dit que les gens passent. Proverbe sanscrit ");
		} else if (timePeriod === "pause") {
			timePeriod = "travail";
			time = 1500;
			minute = time / 60;
			second = 0;
			clearInterval(interval);
			interval = setInterval(decremente, 1000);
			alert("Il est temps de s'y remettre");	
		}
		

	} else {
		time--;
		if (second == 0){
			minute--;
			second = 59;
		} else {
			second--;
		}
		displayClear(second, minute);
	}
}

/*Fonction qui ajoute un zéro et qui l'affiche si c'est en dessous de dix*/
function displayClear(s, m) {
	if (s < 10) {
		s = "0" + s;
	}
	if (m < 10){
		m = "0" + m;
	}
	$("#timeS").text(s);
	$("#timeM").text(m);
}
