const eternals = [
    {
        name: "Ikaris",
        age: "Unknown",
        attributes: ["Flight", "Super Strength", "Energy Manipulation"],
        image: "ikaris.jpg"
    },
    {
        name: "Sersi",
        age: "Unknown",
        attributes: ["Transmutation", "Telepathy", "Immortality"],
        image: "sersi.jpg"
    },
    {
        name: "Thena",
        age: "Unknown",
        attributes: ["Martial Arts", "Weapon Mastery", "Enhanced Agility"],
        image: "thena.jpg"
    },
    {
        name: "Gilgamesh",
        age: "Unknown",
        attributes: ["Invulnerability", "Superhuman Senses", "Healing Factor"],
        image: "gilgamesh.jpg"
    },
    {
        name: "Makkari",
        age: "Unknown",
        attributes: ["Super Speed", "Energy Constructs", "Time Manipulation"],
        image: "makkari.jpg"
    }
];

const showInfo = () => {
    let eternalNumber = document.querySelector("#eternalNum").value;

    eternalNumber = parseInt(eternalNumber) - 1;

    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");

    let eternal = eternals[eternalNumber];
 
    selectedEternalInfo.textContent = `${eternal.name} is a ${eternal.attributes.join(", ").toLowerCase()}
    and is ${eternal.age} years old.`;

    let eternalPic = document.querySelector(".selectedEternalPic");

    eternalPic.src = eternal.image;
}

let eternalsInfo = document.querySelector(".eternalsInfo");

eternalsInfo.textContent = `Welcome to our newest superhero, ${eternals[eternals.length - 1].name} the ${eternals[eternals.length - 1].attributes.join(", ").toLowerCase()}`;
let eternalsList = document.querySelector(".eternalsList");

let allEternalsList = `<ol>`;

eternals.forEach((eternal) => {
    allEternalsList += `<li> ${eternal.name} the ${eternal.attributes.join(", ").toLowerCase()}</li>`;
});

allEternalsList += `</ol>`;
eternalsList.innerHTML = allEternalsList;



