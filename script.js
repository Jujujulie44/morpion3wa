// tour de jeu : déclaration d'un tableau avec id,question,reponse,bonneReponse

 let case1=document.getElementsByClassName("case")[1];
 let case2=document.getElementsByClassName("case")[2];
 let case3=document.getElementsByClassName("case")[3];
 let case4=document.getElementsByClassName("case")[4];
 let case5=document.getElementsByClassName("case")[5];
 let case6=document.getElementsByClassName("case")[6];
 let case7=document.getElementsByClassName("case")[7];
 let case8=document.getElementsByClassName("case")[8];
 let case9=document.getElementsByClassName("case")[9];

let count=0;
let countScore=0;


//appeler la div container
const displayTurn = () => {
/********* GENERER UN TOUR ********/ 

const turn = `
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <button></button>
`;



}







 document.addEventListener("DOMContentLoaded", () => {
    // récuperer le btn dans le HTML qui gère le tour suivant
     const recommencer = document.getElementsByTagName("button")[0]
     btnNextturn.addEventListener('click', displayTurn)
 })