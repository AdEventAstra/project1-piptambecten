// Rebecca's work navbar buttons
//let startButton = document.querySelector("#start");

let aries = document.querySelector("#aries");
let taurus = document.querySelector("#taurus");
let gemini = document.querySelector("#gemini");
let cancer = document.querySelector("#cancer");
let leo = document.querySelector("#leo");
let virgo = document.querySelector("#virgo");
let scorpio = document.querySelector("#scorpio");
let sagittarius = document.querySelector("#sagittarius");
let capricorn = document.querySelector("#capricorn");
let aquarius = document.querySelector("#aquarius");
let pisces = document.querySelector("#pisces");

// star sign profile
horoscope();

const signProfile = document.getElementById('star-sign');
console.log(signProfile)
let starsign = localStorage.getItem("userChoice")
signProfile.textContent = starsign

displayUserChoice()

function displayUserChoice(userChoice) {
    if (!userChoice) {
        signProfile.textContent = " "
    } else {
        localStorage.setItem("userChoice", userChoice)
        signProfile.textContent = `${userChoice}`;
    }

}

// Horoscope description

function horoscope(userChoice) {
    userChoice = localStorage.getItem("userChoice");
    fetch(`https://aztro.sameerkumar.website?sign=${userChoice}&day=today`,

        { method: "POST" }
    )
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let description = response.description;
            console.log(description)
            //added DOM element to render description on the page
            document.querySelector(".card-text").textContent = description;
        })
        .catch(err => console.error(err));
}

document.querySelector(".button-container").addEventListener('click', function (event) {
    console.log(event.target);
    let userChoice = event.target.dataset.sign;
    displayUserChoice(userChoice)
    horoscope(userChoice);
})

// Nasa API
// https://images-api.nasa.gov/search?q=planets
function getNasa() {
    fetch("https://images-api.nasa.gov/search?q=planets")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let number = Math.floor(Math.random() * 5)
            console.log(response.collection.items[0].links[0]);
            let imageNasa = response.collection.items[number].links[0].href;
            //added DOM element to render description on the page
            document.querySelector("#backgroundNasa").src = imageNasa;
            document.querySelector("body").style.backgroundImage = `url("${imageNasa}")`;
        })
        .catch(err => console.error(err));
}
getNasa();

