

function getComputerChoice() {
    const number = 3;
    let a = Math.floor(Math.random() * number);
    if (a === 0) {
        return 'rock';
    } else if (a === 1) {
        return 'paper';
    } else if (a === 2) {
        return 'scissor';
    }
}


let comp = 0;
let user = 0;
function who_won(){
    if (user >= 3 && comp < 3) {
        para.textContent += "You won!";
        user=0;
        comp=0;
    } else if (user < 3 && comp >= 3) {
        para.textContent += "Computer won!";
        user=0;
        comp=0;
    }else{
        para.textContent+="";
    }
}

function winrock() {
    let comp2 = getComputerChoice();
    if (comp2 === "paper") {
        comp++;
    } else if (comp2 === "scissor") {
        user++;
    }
    console.log(`comp=${comp}, you=${user}`);
    console.log(`computer choose ${comp2}`);
    para2.textContent=`comp=${comp}, you=${user} and computer choose ${comp2}`;
    
    who_won();
}

function winpaper() {
    let comp2 = getComputerChoice();
    if (comp2 === "scissor") {
        comp++;
    } else if (comp2 === "rock") {
        user++;
    }
    console.log(`comp=${comp}, you=${user}`);
    console.log(`computer choose ${comp2}`);
    para2.textContent=`comp=${comp}, you=${user} and computer choose ${comp2}`;
    who_won();
}

function winscissor() {
    let comp2 = getComputerChoice();
    if (comp2 === "rock") {
        comp++;
    } else if (comp2 === "paper") {
        user++;
    }
    console.log(`comp=${comp}, you=${user}`);
    console.log(`computer choose ${comp2}`);
    para2.textContent=`comp=${comp}, you=${user} and computer choose ${comp2}`;
    who_won();
}
// function who_won(){
//     if (user >= 3 && comp < 3) {
//         para.textContent += "You won!";
//         user=0;
//         comp=0;
//     } else if (user < 3 && comp >= 3) {
//         para.textContent += "Computer won!";
//         user=0;
//         comp=0;
//     }
// }
const button_rock = document.querySelector("#rock");
const button_paper = document.querySelector("#paper");
const button_scissor = document.querySelector("#scissor");
const para = document.querySelector(".para");
const para2= document.querySelector(".update");
para.textContent="";
para2.textContent="";


button_rock.addEventListener("click", winrock);
button_paper.addEventListener("click", winpaper);
button_scissor.addEventListener("click", winscissor);






