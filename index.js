var snowBallsClicked = [];

let snowBall01 = document.querySelector(".snow-01");
let snowBall02 = document.querySelector(".snow-02");
let snowBall03 = document.querySelector(".snow-03");

let snowmanHead = document.querySelector(".snowman-head");
let snowmanMiddle = document.querySelector(".snowman-middle");
let snowmanBottom = document.querySelector(".snowman-bottom");


snowBall01.addEventListener('click', (event) => {
    let alreadyClicked = snowBallsClicked.find((snowball) => snowball == snowBall01);
    if(alreadyClicked == undefined) {
        switch (snowBallsClicked.length) {
            case 0:
                snowmanBottom.classList.add("visible");
                break;
            case 1:
                snowmanMiddle.classList.add("visible");
                break;
            case 2:
                snowmanHead.classList.add("visible");
                break;
            default:
                break;
        }
        snowBall01.classList.remove("visible");
        snowBallsClicked.push(snowBall01);
    }
});

snowBall02.addEventListener('click', (event) => {
     let alreadyClicked = snowBallsClicked.find((snowball) => snowball == snowBall02);
    if(alreadyClicked == undefined) {
        switch (snowBallsClicked.length) {
            case 0:
                snowmanBottom.classList.add("visible");
                break;
            case 1:
                snowmanMiddle.classList.add("visible");
                break;
            case 2:
                snowmanHead.classList.add("visible");
                break;
            default:
                break;
        }
        snowBall02.classList.remove("visible");
        snowBallsClicked.push(snowBall02);
    }
});

snowBall03.addEventListener('click', (event) => {
     let alreadyClicked = snowBallsClicked.find((snowball) => snowball == snowBall03);
    if(alreadyClicked == undefined) {
        switch (snowBallsClicked.length) {
            case 0:
                snowmanBottom.classList.add("visible");
                break;
            case 1:
                snowmanMiddle.classList.add("visible");
                break;
            case 2:
                snowmanHead.classList.add("visible");
                break;
            default:
                break;
        }
        snowBall03.classList.remove("visible");
        snowBallsClicked.push(snowBall03);
    }
});


var iceBricksClicked = [];

let cube01 = document.querySelector(".cube-01");
let cube02 = document.querySelector(".cube-02"); 
let cube03 = document.querySelector(".cube-03");

let shortTower = document.querySelectorAll(".short-tower");
let highTower = document.querySelectorAll(".high-tower"); 
let door = document.querySelector(".door");


cube01.addEventListener('click', (event) => {
    let alreadyClicked = iceBricksClicked.find((iceBrick) => iceBrick == cube01);
    if(alreadyClicked == undefined) {
        switch (iceBricksClicked.length) {
            case 0:
                shortTower.forEach((tower) => {
                    tower.classList.add("visible");
                });
                break;
            case 1:
                highTower.forEach((tower) => {
                    tower.classList.add("visible");
                });
                break;
            case 2:
                door.classList.add("visible");
                break;
            default:
                break;
        }
        cube01.classList.remove("visible");
        iceBricksClicked.push(cube01);
    }
});

cube02.addEventListener('click', (event) => {
    let alreadyClicked = iceBricksClicked.find((iceBrick) => iceBrick == cube02);
    if(alreadyClicked == undefined) {
        switch (iceBricksClicked.length) {
            case 0:
                shortTower.forEach((tower) => {
                    tower.classList.add("visible");
                });
                break;
            case 1:
                highTower.forEach((tower) => {
                    tower.classList.add("visible");
                });
                break;
            case 2:
                door.classList.add("visible");
                break;
            default:
                break;
        }
        cube02.classList.remove("visible");
        iceBricksClicked.push(cube02);
    }
});

cube03.addEventListener('click', (event) => {
    let alreadyClicked = iceBricksClicked.find((iceBrick) => iceBrick == cube03);
    if(alreadyClicked == undefined) {
        switch (iceBricksClicked.length) {
            case 0:
                shortTower.forEach((tower) => {
                    tower.classList.add("visible");
                });
                break;
            case 1:
                highTower.classList.add("visible");
                break;
            case 2:
                door.classList.add("visible");
                break;
            default:
                break;
        }
        cube03.classList.remove("visible");
        iceBricksClicked.push(cube03);
    }
});



var rudolfPartsClicked = [];

let pet01 = document.querySelector(".pet-01");
let pet02 = document.querySelector(".pet-02");
let pet03 = document.querySelector(".pet-03");

let petBody = document.querySelector(".pet-body");
let petTail = document.querySelector(".tail");

let petLegs = document.querySelectorAll(".pet-leg");

let petHornLeft = document.querySelector(".horn-left");
let petHornRight = document.querySelector(".horn-right");
let petHead = document.querySelector(".pet-head");


pet01.addEventListener('click', (event) => {
    let alreadyClicked = rudolfPartsClicked.find((part) => part == pet01);
    if(alreadyClicked == undefined) {
        petHead.classList.add("visible");
        petHornLeft.classList.add("visible");
        petHornRight.classList.add("visible");
        pet01.classList.remove("visible");
        rudolfPartsClicked.push(pet01);
    }
});

pet02.addEventListener('click', (event) => {
    let alreadyClicked = rudolfPartsClicked.find((part) => part == pet02);
    if(alreadyClicked == undefined) {
       petLegs.forEach((leg) => {
            leg.classList.add("visible");
        });
        pet02.classList.remove("visible");
        rudolfPartsClicked.push(pet02);
    }
});

pet03.addEventListener('click', (event) => {
    let alreadyClicked = rudolfPartsClicked.find((part) => part == pet03);
    if(alreadyClicked == undefined) {
        petBody.classList.add("visible");
        petTail.classList.add("visible");
        pet03.classList.remove("visible");
        rudolfPartsClicked.push(pet03);
    }
});
