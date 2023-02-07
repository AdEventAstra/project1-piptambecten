// Rebecca's work navbar

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
            // document.querySelector(".API").style.background = imageNasa;
            document.querySelector("body").style.backgroundImage = `url(${imageNasa})`;
            document.querySelector()

        })
        .catch(err => console.error(err));

}
getNasa();




