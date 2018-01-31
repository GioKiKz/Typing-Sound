$(document).keypress(function() {

	var a1 = new Audio("a1.mp3");
	var a2 = new Audio("a2.mp3");
	var a3 = new Audio("a3.mp3");
	var a4 = new Audio("a4.mp3");
	var a5 = new Audio("a5.mp3");
	var ran = Math.floor(Math.random()*5); 

	if (ran == 0) {
		a1.play();
	} 
	else if (ran == 1) {
		a2.play();
	}
	else if (ran == 2) {
		a3.play();
	}
	else if (ran == 3) {
		a4.play();
	}
	else if (ran == 4) {
		a5.play();
	}	
	
});
