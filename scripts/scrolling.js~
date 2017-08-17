var navLinks = document.getElementsByClassName("nav");
var header = document.getElementsByClassName("header");
var navBar = document.getElementById("navigation");

var setActive = function(obj){
	for(var i = 0; i < navLinks.length; i++){
		navLinks[i].className = "nav";
	}
	obj.className += " active";
	console.log(navBar.offsetHeight);
	console.log(header[0].offsetHeight);
}

window.onscroll = function () {
	if(header[0].offsetHeight - navBar.offsetHeight <= document.body.scrollTop){
		navBar.style.position = "fixed";	
		navBar.style.bottom = "auto";
		navBar.style.top = "0px";
	}
	else{
		navBar.style.position = "absolute";	
		navBar.style.bottom = "0px";
		navBar.style.top = "auto";
	}
}