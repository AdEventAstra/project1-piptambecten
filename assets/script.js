// Rebecca's work navbar

// Tennisson's work NASA

// Patricia's work left-side

// Tamara's work right-side

fetch("https://aztro.sameerkumar.website?sign=aquarius&day=today", {method: "POST"}
)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));