if (true) { 
    console.log("The consition is TRue")

} else {
    console.log("The condition is False")
}



if (false) { 
    console.log("The consition is TRue")

} else {
    console.log("The condition is False")
}


var condition = 1 > 0;
if (condition) { 
    console.log("The condiiton is Satisfied")

} else {
    console.log("The condition does not Satisfied")
}


var condition = 1 < 0;
if (condition) { 
    console.log("The condiiton is Satisfied")

} else {
    console.log("The condition does not Satisfied")
}



console.log()


var a = 100
var b = 400

var result = a + b

if (result == 500) {
    console.log("The Result is Correct")

} else if (result == 300) {
    console.log("Please try again later")

} else {
    console.log("The Result is not Correct")
}



/// greet  a user with hours 

function greetUser() {
    var time = new Date().getHours();
    if (time < 12) {
        return "Good Morning sir!"
    } else if (time < 15) {
        return "Good Afternoon sir!"
    } else {
        return "Good Evening sir!"
    }
}

console.log(greetUser())