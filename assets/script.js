// global variables
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

const signProfile = document.getElementById('star-sign');
let starsign = localStorage.getItem("userChoice")
signProfile.textContent = starsign

function displayUserChoice(userChoice) {
    if (!userChoice) {
        signProfile.textContent = " "
    } else {
        localStorage.setItem("userChoice", userChoice)
        signProfile.textContent = `${userChoice}`;
    }
}
displayUserChoice()
// Horoscope description

function horoscope(userChoice) {
    userChoice = localStorage.getItem("userChoice");
    if (userChoice) {
        fetch(`https://aztro.sameerkumar.website?sign=${userChoice}&day=today`,
            { method: "POST" }
        )
            .then(response => response.json())
            .then(response => {
                let description = response.description;
                //added DOM element to render description on the page
                document.querySelector(".card-text").textContent = description;
            })
            .catch(err => console.error(err));
    }
}
document.querySelector(".button-container").addEventListener('click', function (event) {
    let userChoice = event.target.dataset.sign;
    displayUserChoice(userChoice)
    horoscope(userChoice);
})

// Nasa API
function getNasa() {
    fetch("https://images-api.nasa.gov/search?q=planets&media_type=image")
        .then(response => response.json())
        .then(response => {
            let number = Math.floor(Math.random() * 12 + 5);
            let imageNasa = response.collection.items[number].links[0].href.replace("thumb", "orig");
            //added DOM element to render description on the page
            document.querySelector("body").style.backgroundImage = `url("${imageNasa}")`;
        })
        .catch(err => console.error(err));
}

// Call getNasa() when the page finishes loading
window.addEventListener("load", getNasa);

// Add event listener to the button
document.getElementById("change-background-btn").addEventListener("click", getNasa);


