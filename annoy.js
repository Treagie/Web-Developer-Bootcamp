var answer = prompt("Are we there yet?");

//while(answer !== "yes" && answer !== "yeah") {
//	var answer = prompt("Are we there yet?");
//}

//alternative option: checks for 'yes' anywhere in the user's answer
while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("YAY! We made it!!");