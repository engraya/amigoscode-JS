const maleTurks = ['mehmet', 'arda', 'tayfun', 'tuncay', 'fatih']

const femaleTurks = ['hatice', 'zehra', 'ayse', 'fatma', 'sunbul', 'hulya']

const turks = [...maleTurks, ...femaleTurks]

turks.forEach((name)=>{
    console.log(name);
} )


const statement = 'Programming';
const statementToArray = [...statement];
statementToArray.forEach((letter)=>{
    console.log(letter);
})

const summation = (n1, n2, n3, n4) =>{
    return n1 + n2 + n3 + n4;
}

const values = [98, 45, 78, 11, 44, 87, 12, 20]

const addition = summation(...values);
console.log(addition);
