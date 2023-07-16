const title = 'AGE'

const displayer = function(name, age){
    return {
        name, 
        commit(lang1, lang2){
            return `My name is ${name}, I am a programmer, I code with ${lang1} and ${lang2}`;
        },
        [title.toLowerCase()] : age
    }

}
let myDisplay = displayer("Habib", 25);
console.log(myDisplay.commit('JavaScript', 'Python'));
console.log(myDisplay.name);
console.log(myDisplay.age);
