console.log("number Iteration")
for (var i = 0; i <= 7; i++) {
    console.log(i)
}

console.log(); 

console.log(" for i"); 
var names = ["Ahmad", "Muhammad", "Musa", "Isah", "Yahya", "Zakariyya"]

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log();

console.log(" for of ")
for (const name of names) {
    console.log(name)
}

console.log();

console.log("for Each")
names.forEach(function(name) {
    console.log(name)

})

