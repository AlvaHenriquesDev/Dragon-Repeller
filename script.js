let xp = 0
let health = 100
let gold = 50
let currentWeaponIndex = 0
let fighting
let monsterHealth
let inventory = ['Bastão']
const locations = [
    {
        name: "town square",
        "button text": ['Vá p/ loja', 'Va p/ caverna', 'Enfrente o Dragão'],
        "button functions": [goStore, goCave, fightDragon],
        text: "Voce está na praça e identificou uma placa escrito 'Loja'",
        background: "URL(./imgs/bg2.jpg)"
    },
    {
        name: "store",
        "button text": ["Compre 10 de HP (10 Ouro)", "Compre uma arma (30 gold)", "Volte à praça"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Você está na loja."
    },
    {
        name: 'cave',
        "button text": ["Lute c/ slime", "Lute c/ Tigre", "Volte à praça"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "Voce está na caverna e observa varios monstros",
    },
]
const weapons = [
    {
        name: "Bastão",
        power: 5,
    },
    {
        name: "Adaga",
        power: 30,
    },
    {
        name: "Martelo dentado",
        power: 50,
    },
    {
        name: "Espada",
        power: 100,
    }
];

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text = document.querySelector('#text')
const xpText = document.querySelector('#xpText')
const healthText = document.querySelector('#healthText')
const goldText = document.querySelector('#goldText')
const monsterStats = document.querySelector('#monsterStats')
const monsterName = document.querySelector('#monsterName')
const monsterHealthText = document.querySelector("#monsterHealth")
const backgroundImage = document.querySelector("#game")

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
    backgroundImage.style.backgroundColor = location.background
}

function goTown() {
    update(locations[0])
}

function goStore() {
    update(locations[1])
}
function goCave() {
    update(locations[2])
}
function fightDragon() {

}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "Voce não tem ouro suficiente para isso!"
    }
}

function buyWeapon() {
    if (gold >= 30) {
        gold -= 30;
        currentWeaponIndex++
        let newWeapon = weapons;
        text.innerText = "Você adquiriu uma nova arma.";
    }
}

function buyWeapon() {

}

function fightSlime() {

}

function fightBeast() {

}

button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon