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





// Tennisson's work NASA

// Patricia's work left-side
// fetch("https://aztro.sameerkumar.website/?sign=aquarius&date_range=aquarius")
// .then(response => response.json())
// .then(function(response){
//    
// })

const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
    .then(response => response.json())
    .then(json => {
        const date = json.description;
        console.log(date);
        var profileUrl = json.description;
        console.log(profileUrl)
        var urlText = document.querySelectorId('star-sign')
        urlText.setAttribute('src', profileUrl)
        urlText.append('star-sign')
    });
// Tamara's work right-side



// leave this for the wish list 
// const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
// fetch(URL, {
//     method: 'POST'
// })
// .then(response => response.json())
// .then(json => {
//     const date = json.description;
//     console.log(date);
//         var profileUrl = response.description;
//         console.log(profileUrl)
//         var urlText = document.querySelectorId('star-sign')
//             urlText.setAttribute('src', profileUrl)
//             urlText.append('star-sign')
// });

// this wont push to my branch, I think it wants me to pull from the main but this code did not push when we merged on friday the 3rd.

//need to get the chosen sign from local storage to profile div. 
const signChoice = document.getElementById('#aries');
console.log(signChoice)

const signProfile = document.getElementById('star-sign');
console.log(signProfile)

// signChoice.addEventListener('click', displayUserChoice)
getUserChoice()
// I think I have to do if or a switch case to tie the buttons to a function I can hook into. 
function getUserChoice(){
    localStorage.setItem('Sign', onclick.value)
    let sign = localStorage.getItem('Sign')
    console.log(Sign)
    displayUserChoice()
    function displayUserChoice () {
        signChoice.onclick = function () {
            signChoice.textContent = sign;
            console.log('sign')
        }
    }
}

//let btnDsn = document.querySelector("#btn-design");
//localStorage.setItem('Name','CLICKED');
//let name = localStorage.getItem('Name');

//(function (){
	//btnDsn.onclick = function() {
		//btnDsn.textContent = name;
	//};
//})();


// Tamara's work right-side


function horoscope() {
    fetch("https://aztro.sameerkumar.website?sign=aquarius&day=today",
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

horoscope();


// Nasa API
// https://images-api.nasa.gov/search?q=planets
function getNasa() {
    fetch("https://images-api.nasa.gov/search?q=planets")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(response.collection.items[0].links[0]);
            let imageNasa = response.collection.items[0].links[0].href;
            //added DOM element to render description on the page
            document.querySelector("#backgroundNasa").src = imageNasa;
            document.querySelector("body").style.backgroundImage = `url("${imageNasa}")`;
            document.querySelector()

        })
        .catch(err => console.error(err));

}
getNasa();


