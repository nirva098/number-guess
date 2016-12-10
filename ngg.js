function randomNumber0to100 () {
	// body...
	var x = Math.floor(Math.random()*100);
	return x;
};

// generating a random number
var random = randomNumber0to100();
var attempt = 0;
console.log("random number generated :",random);

function trueChange(){
	var ind = document.getElementById("indicator");
	ind.style.background = "green";
};

function falseChange () {
	// body...
	var ind = document.getElementById("indicator");
	ind.style.background = "red";
};

function check(){
	//allowing 7 attempts only 
	attempt += 1;
	if (attempt>7) {
		location.reload();
		return;
	};
	//having track over previous attempts 
	var x = document.getElementById('in').value;
	console.log("value entered by user :",x);
	var pre = document.getElementById("preatt");
	pre.innerHTML = pre.innerHTML + " " + x + " ";

	//if guess is true 
	if (x == random) {
		console.log("trueChange")
		trueChange();
		document.getElementById("hint").innerHTML = "Guess is very Perfect!"
	};

	//guess is not true 
	if (x != random) {
		console.log("falseChange")
		falseChange();
		//giving hint 
		if (x<random) {
			document.getElementById("hint").innerHTML = "Guess is very low !"
		};
		if (x>random) {
			document.getElementById("hint").innerHTML = "Guess is very high !"
		};
	};


};