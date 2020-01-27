/* function om zoekbalk te laten zien gebaseerd op of deze momenteel zichtbaar is
hier heeft Joost Flick mij bij geholpen */
function showSearch () {
	console.log('search')
	const searchfield = document.getElementsByClassName('zoeken')[0]
	searchfield.classList.toggle("show")
}

/* toggle filter wel/niet laten zien
https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
 */
function openDropdown(type) {
	document.getElementById(type).classList.toggle("giveHeight");
}

/* meerdere verhalen tegelijk selecteren */
const articles = document.getElementsByClassName("story-title")
Array.from(articles).forEach(function (story) {
	story.addEventListener("click", function(){
		if (this.classList.contains('selected')) {
			this.classList.remove('selected')
		} else {
			this.classList.add('selected')
		}
		}
	)
}
)