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