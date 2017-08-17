var navLinks = document.getElementsByClassName("nav");
var sections = document.getElementsByClassName("section");
var navBar = document.getElementById("navigation");

var currentScroll = 0;

var setActive = function(obj){
	for(var i = 0; i < navLinks.length; i++){
		navLinks[i].className = "nav";
	}
	obj.className += " active";
}

window.onscroll = function () {
	if(sections[0].offsetHeight - navBar.offsetHeight <= document.body.scrollTop){
		navBar.style.position = "fixed";	
		navBar.style.bottom = "auto";
		navBar.style.top = "0px";
	}
	else{
		navBar.style.position = "absolute";	
		navBar.style.bottom = "0px";
		navBar.style.top = "auto";
	}
	
	currentScroll = document.body.scrollTop;
	
	var hite = sections[0].offsetHeight;
	
	setActive(navLinks[Math.floor((navBar.offsetHeight*2 +currentScroll)/hite)]);
	
	
}

var toScroll = function (index) {
	var to = index*sections[0].offsetHeight-navBar.offsetHeight;
	console.log(to);
	currentScroll = document.body.scrollTop;
	console.log(currentScroll);
	if(currentScroll <= to){
		for (var i = currentScroll; i < to; i++){
			scrollBy(0,1);
		}	
	}
	else {
		for (var i = currentScroll; i > to; i--){
			scrollBy(0,-1);		
		}
	}
}
