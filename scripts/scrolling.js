var navLinks = document.getElementsByClassName("nav");
var sections = document.getElementsByClassName("section");
var navBar = document.getElementById("navigation");
var scrollPositions = [];
var currentScroll = 0;

var setActive = function(obj){
	for(var i = 0; i < navLinks.length; i++){
		navLinks[i].className = "nav";
	}
	obj.className += " active";
}

window.onload = function () {
	navLinks = document.getElementsByClassName("nav");
	sections = document.getElementsByClassName("section");
	navBar = document.getElementById("navigation");
	scrollPositions = [];
	currentScroll = 0;
	
	for(var i = 0; i < sections.length; i++){
		if(i == 0){
			scrollPositions.push(0);		
		}
		else{
			scrollPositions.push(scrollPositions[i-1] + sections[i-1].offsetHeight);
		}
	}
}

window.onscroll = function () {
	if(sections[0].offsetHeight - navBar.offsetHeight <= document.body.scrollTop){
		navBar.style.position = "fixed";	
		navBar.style.bottom = "auto";
		navBar.style.top = "0px";
	}
	else{
		navBar.style.position = "absolute";	
		navBar.style.bottom = "0%";
		navBar.style.top = "auto";
	}
	
	currentScroll = document.body.scrollTop;
/*	
	var index = 0;
	while(currentScroll > scrollPositions[index] && index != scrollPositions.length){
		index++;	
	}
	
	if(index == scrollPositions.length){
		setActive(navLinks[index]);	
	}
	else if((scrollPositions[index] - scrollPositions[index - 1]) / 2 > currentScroll - scrollPositions[index - 1]){
		setActive(navLinks[index -1]);
	}
	*/
	
	//FIXME: Adjust so you could have variable height sections
	var hite = sections[0].offsetHeight;
	setActive(navLinks[Math.floor((hite/2 +currentScroll)/hite)]);
	
	
}

function callScroll(y){
	return function(){
		scrollBy(0,y);
		}
}

//TODO: ENHANCEMENT Implement smooth scrolling somehow
var toScroll = function (index) {
	var to = scrollPositions[index]-navBar.offsetHeight;
	console.log(to);
	currentScroll = document.body.scrollTop;
	console.log(currentScroll);
	if(currentScroll <= to){
		for (var i = currentScroll; i < to; i++){
			setTimeout(callScroll(1),i/5);
		}	
	}
	else {
		for (var i = currentScroll; i > to; i--){
			setTimeout(callScroll(-1),i/5);		
		}
	}
}


