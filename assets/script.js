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
        var profileUrl = response.description;
        console.log(profileUrl)
        var urlText = document.querySelectorId('star-sign')
            urlText.setAttribute('src', profileUrl)
            urlText.append('star-sign')
});
// Tamara's work right-side