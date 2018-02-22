
function runStart(){
	alert("Hello! One user will be prompted to enter a number, the second user will try to guess that number.");
	
	
	var num1 = 0;
	var num2 = 0;
	var guesses = 1;
	
	let numString = prompt("User 1, enter a positive number");
	num1 = parseInt(numString);	
	
	let numString2 = prompt ("User 2, enter a number");
	num2 = parseInt(numString2);
	
	while (num1 != num2) {
	
		if (num1 > num2) {
			let numString3 = prompt("Not quite! Your guess is less than the targeted number. Guess again!");
			num2 = parseInt(numString3);
			guesses++;
		}
		if (num1 < num2) {
			let numString3 = prompt("Not quite! Your guess is greater than the targeted number. Guess again!");
			num2 = parseInt(numString3);
			guesses++;
		}
	}
	
	if (num1 == num2) {
		alert("Congrats! You got it! You took " + guesses + " guesses to get it right!");
	}
}

