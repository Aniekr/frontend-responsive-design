/*function om zoekbalk te laten zien gebaseerd op of deze momenteel zichtbaar is
Hier heeft Joost Flick mij bij geholpen */
function showSearch () {
	const searchfield = document.getElementById('zoeken')
	console.log(searchfield.style.display)
	if (!searchfield.style.display) {
		searchfield.style.display = 'none'
	}  else if (searchfield.style.display === 'none') {
		searchfield.style.display = ''
	}
}
