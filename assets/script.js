// Rebecca's work navbar

// Tennisson's work NASA

// Patricia's work left-side
// fetch("https://aztro.sameerkumar.website/?sign=aquarius&date_range=aquarius")
// .then(response => response.json())
// .then(function(response){
//    
// })


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