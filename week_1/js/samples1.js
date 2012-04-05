var phrase = "Bob said, \"Hello.\""; //This is an example of a string.

/*
Demo of an if statement
*/
/*
var x = 19;
var y = 19;

if(x < y)
{
	alert(x + " is less than " + y);
}
else if(x > y)
{
	alert(x + " is greater than " + y);
}
else
{
	alert(x + " equals " + y);
}

alert("This will always show");
*/

/*
  Demo of switch
*/
/*
var num = Number(prompt("Give me a number 1 - 14"));

switch (num)
{
	case 1:
		alert("So, you are a beginner, eh?");
	break;
	case 2:
		alert("Second place is no place.");
	break;
	case 3:
		alert("Yeah, 3.");
	break;
	case 4:
		alert("Yeah, 4.");
	break;
	case 5:
		alert("Yeah, 5.");
	break;
	case 6:
		alert("Yeah, 6.");
	break;
	case 7:
		alert("Yeah, 7.");
	break;
	case 8:
		alert("Yeah, 8.");
	break;
	case 9:
	case 10:
	case 11:
	case 12:
	case 13:
		alert("I don't care.");
	break;
	case 14:
		alert("winner");
	break;
	default:
		alert("Do you know how to count?");
	break;
}*/

/*
  Loops
*/
/*
var x = 0;

while(x < 12)
{
	console.log(x);
	x++;
}

for(var y = 0; y < 19;y++)
{
	console.log(y, "!!!");
}
*/

/*
  Function
*/
/*
var giveValue = function()
{
	return "open";
};

var val1 = giveValue();
var val2 = giveValue();

function doSomething()
{
	console.log("I done did somthin");
}

function useThis(bob, larry)
{
	console.log(bob, larry, "got used");
}



doSomething();
doSomething();

useThis("Karate!!!!");
useThis("Judo", "Chop");
console.log(val1, val2);

*/

/*
  Array
*/
/*var names = ["Bob", "Fred", "Sally"];
alert(names);
names.push("Marcia");
alert(names);
names.pop(); //bye marcia
names.pop(); //bye sally
alert(names);
names.shift(); // bye bob
alert(names);
*/

/*
  Object
*/

var employee = {
	firstName: "Bob",
	lastName: "Andrews",
	age: 22,
	position: "Custodian",
	clockIn: function(){
		var val1 = "asdf";
		console.log(this.firstName, "clocked in.");
	}
};

console.log(employee.firstName, employee["age"]);

console.log(employee);
employee.clockIn();

/*var know = prompt("What would you like to know about the employee?");
if(employee[know])
{
	alert(employee[know]);
}*/

