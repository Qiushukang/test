window.onload = function() {
	let header = document.querySelector("header"),
		footer = document.querySelector("footer")
	loadElement('./header.html',  header)
	loadElement('./footer.html',  footer)
	loadTop()
	showImg()
}
