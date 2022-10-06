console.log('connecté');
//stockage des joueurs en
const joueur01 = document.querySelector('.joueur--1');
console.log(joueur01+'ligne 26');//le console.log est la por déboguer je le laisse dans la cadre de l'évaluation .
const joueur02 = document.querySelector('.joueur--2');
console.log(joueur01+'ligne 52');

//score définitif 
const scoreDéfinitif01 = document.querySelector('#scoreDéfinitif--1');//score définitif du joueur 1 
console.log(scoreDéfinitif01+'ligne 34');
const scoreDéfinitif02 = document.querySelector('#scoreDéfinitif--2');//score définitif du joueur 2
console.log(scoreDéfinitif02+'ligne 34');

//score provisoire
const scoreProvisoire01 = document.querySelector('#scoreProvisoire--1');
console.log(scoreProvisoire01+'ligne 37')
const scoreProvisoire02 = document.querySelector('#scoreProvisoire--2 ');
console.log(scoreProvisoire01+'ligne 64');
//des
const dice = document.querySelector('.dice');//ligne 46
console.log(dice+'ligne 46')

//boutons
const nouvellePartie = document.querySelector('.nouvellePartie');
console.log(nouvellePartie+'ligne 75');
const btnLancer = document.querySelector('.btn--lancer');
console.log(btnLancer+'ligne 76');
const securiserLeScore = document.querySelector('.btn--securiserLeScore');
console.log(securiserLeScore+'ligne 77');

scoreDéfinitif01.textContent = 0;// <p class="scoreProvisoire" id="scoreProvisoire--1">0</p><!-- score provisoire du joueur 1 -->
////avec la propriété textContent  on changer le contenu textuel d'un élément <p> avec id="score--0":
//ici on change on initialse  a 0 pour le player 1
scoreDéfinitif02.textContent = 0;////c'est la méme chose que pour le player 1 mais ici c'est le player 2

dice.classList.add('hidden');
//La classListpropriété renvoie les noms de classe CSS d'un élément.
