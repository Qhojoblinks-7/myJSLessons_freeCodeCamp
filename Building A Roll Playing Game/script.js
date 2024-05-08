
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
const inventory = ["stick"];

//Accessing html elements with Document Object Model (DOM) using their ids
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const healthText = document.querySelector("#healthText");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealthText");

//an array containing Object of locations
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goTown, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    }
];

//assigning some functions to variables
//so a user can access their functionalities upon
//clicking with .onclick property used for buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//declaring functions
//a function to make updates
function update(location){
     //changing text in html  directly from js using DOM
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2]
     //updating functions assigned to buttons upon clicking
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
     //updating the text in the text id
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";

}
// function to go to the town square
function goTown(){
    
}

//A function that helps to navigate the store
function goStore() {
    update(locations[0]);
}

//A function that helps to navigate the cave
function goCave(){
    console.log("Go to cave");
}
//A function that helps to fight dragon
function fightDragon() {
    console.log("Fighting Dragon");
}

//a functiion for buying health
function buyHealth(){

}

// a function to buy weapon
function buyWeapon(){

}
