// var profession = "Engineering"

// console.log(typeof profession)
// console.log(profession.length)
// console.log(profession.toLocaleUpperCase())
// console.log(profession.toLocaleLowerCase())
// console.log(profession.substring(0, 6))


// var discipline = "Engineering"
// var specialisation = "Civil"
// var professionDescription = specialisation + " " + discipline
// console.log(professionDescription)
// console.log(`${specialisation} ${discipline}`)
// console.log(`${specialisation.toLocaleUpperCase()} ${discipline.toLocaleLowerCase()}`)



var str = "students";
var str2 = "Engineering is the best and impactful profession in the world"


// the length of the string
var srt_length = str.length
console.log(srt_length)


// retrieving a character 
var str_character = str[3]
console.log(str_character);

// finding a substring in a string
var index =  str2.indexOf("impactful")
console.log(index)

var last_index = str2.lastIndexOf("in")
console.log(last_index)


// search method in a string
var search_method = str2.search("best")
console.log(search_method)



//slice method
var slice_method = str2.slice(9, 16)
console.log(slice_method)

var slice_method_negative_values = str2.slice(-27, -3)
console.log(slice_method_negative_values)



//substring method...works the same as slice but cannot take negative arguments
var substring_method = str2.substring(9, 18)
console.log(substring_method)


// the substr method

var substr_method = str2.sub(19, 6)
console.log(substr_method)


// replacing a string inside a string
var replace_string = str2.replace("impactful", "Beneficial")
console.log(replace_string)

// trimming a string

var trimming_string = str2.trim()
console.log(trimming_string)

// to uppercase

var to_uppercase = str2.toUpperCase()
console.log(to_uppercase)


// to lowercase
var to_lowercase = str2.toLowerCase()
console.log(to_lowercase)


//concat method
var concat_method = str2.concat(str)
console.log(concat_method)