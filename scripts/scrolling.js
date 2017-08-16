var navLinks = document.getElementsByClassName("nav");

var setActive = function(obj){
	for(var i = 0; i < navLinks.length; i++){
		navLinks[i].className = "nav";
	}
	obj.className += " active";
}

//window.onscroll = function (e) {