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

/* meerdere verhalen tegelijk selecteren */
const articles = document.getElementsByClassName("story-title")
Array.from(articles).forEach(function (story) {
	story.addEventListener("click", function(){
console.log(this) 
		if (this.classList.contains('selected')) {
			this.classList.remove('selected')
		} else {
			this.classList.add('selected')
		}
		}
	)
}
)

/* toggle filter wel/niet laten zien
https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
 */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }