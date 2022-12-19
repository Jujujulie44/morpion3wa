

 document.addEventListener("DOMContentLoaded", () => {

     const container = document.querySelector(".container");
     const box = document.querySelectorAll(".box"); 
     let player = document.getElementById("player"); 
     
     
     const game =["", "", ""]; 
     
     let nbClick= 0;
     let count = 0;
     let countScore = 0;
     
     
     
     for (let i= 0; i<box.length; i++) {
         box[i].addEventListener("click", () =>{
             nbClick++
             
             if(nbClick % 2 === 1) {
                 player.innerText = "player X à vous de jouer"
                 box[i].innerText= "O"
             }
             
             else if (nbClick % 2 === 0) {
                 player.innerText = "player 0 à vous de jouer"
                 box[i].innerText= "X"
             }
         })
     }
     
     //récuperer la valeur du bouton où utilisateur clique
 })   
// document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClicCase))
    const btnreset = document.querySelector("button").addEventListener("click", recommencer) {
        window.alert("Hello!");
    });
     

 
 
 
 
//  const button = document.getElementById("validation-button");

 
 
 
//      Array.from(reset).forEach(button => {
//             button.addEventListener('click', () => {
            
//             const buttonCliked = button.innerText
//             button.removeEventListener
            
//             //comparer cette valeur avec la valeur de la bonneReponse de l'objet courant
            
//             count++
//         })
//     })
 
 // tour de jeu : déclaration d'un tableau avec id,question,reponse,bonneReponse

//   let case1=document.getElementsByClassName("case")[1];
//   let case2=document.getElementsByClassName("case")[2];
//   let case3=document.getElementsByClassName("case")[3];
//   let case4=document.getElementsByClassName("case")[4];
//   let case5=document.getElementsByClassName("case")[5];
//   let case6=document.getElementsByClassName("case")[6];
//   let case7=document.getElementsByClassName("case")[7];
//   let case8=document.getElementsByClassName("case")[8];
//   let case9=document.getElementsByClassName("case")[9];

//  let count=0;
//  let countScore=0;


// //appeler la div container
 // const displayTurn = () => {
// /********* GENERER UN TOUR ********/ 

//  const turn = `
//          <div></div>
//          <div></div>
//          <div></div>
//          <div></div>
//          <div></div>
//          <div></div>
//          <div></div>
//          <div></div>
//          <div></div>
//          <button></button>
//  `;

//  }





