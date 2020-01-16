/* function om zoekbalk te laten zien gebaseerd op of deze momenteel zichtbaar is
hier heeft Joost Flick mij bij geholpen */
function showSearch () {
	const searchfield = document.getElementById('zoeken')
	if (searchfield.style.display === 'none') {
		searchfield.style.display = 'block'
	}  else  {
		searchfield.style.display = 'none'
	}
}

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