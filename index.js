let scoreHome = document.querySelector(".scoreHome-el");
let scoreGuest = document.querySelector(".scoreGuest-el");
let homeOne = document.querySelector(".homeOne-el");
let homeTwo = document.querySelector(".homeTwo-el");
let homeThree = document.querySelector(".homeThree-el");
let guestOne = document.querySelector(".guestOne-el");
let guestTwo = document.querySelector(".guestTwo-el");
let guestThree = document.querySelector(".guestThree-el");

let homePoints = 0;
let guestPoints = 0;

function addOneHome(){
    homePoints += 1;
    scoreHome.textContent = homePoints;   
}
homeOne.addEventListener("click", addOneHome)

function addTwoHome(){
    homePoints += 2;
    scoreHome.textContent = homePoints;   
}
homeTwo.addEventListener("click", addTwoHome)

function addThreeHome(){
    homePoints += 3;
    scoreHome.textContent = homePoints;   
}
homeThree.addEventListener("click", addThreeHome)

function addOneGuest(){
    guestPoints += 1;
    scoreGuest.textContent = guestPoints;   
}
guestOne.addEventListener("click", addOneGuest)

function addTwoGuest(){
    guestPoints += 2;
    scoreGuest.textContent = guestPoints;   
}
guestTwo.addEventListener("click", addTwoGuest)

function addThreeGuest(){
    guestPoints += 3;
    scoreGuest.textContent = guestPoints;   
}
guestThree.addEventListener("click", addThreeGuest)


// function addTwo(){
//     homePoints += 2;
//     scoreHomeEl.textContent = homePoints;
// }

// addTwoEl.addEventListener("click", addTwo)

// function addThree(){
//     homePoints += 3;
//     scoreHomeEl.textContent = homePoints;
// }

// addThreeEl.addEventListener("click", addThree)

