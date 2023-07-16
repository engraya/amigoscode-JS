const location = {
    continent:'Asia',
    country:'Uzbekistan',
    city:'Samarkand'
}

const person = {
    firstName:'Muhammad',
    lastName:'Ayvanov'
}

const identity = {
    name:`${person.firstName} ${person.lastName}`,
    region:location.continent,
    nationality:location.country,
    province:location.city
}

var realIdentity = JSON.stringify(identity);
console.log(realIdentity);


// with Spread Operator

var man = {...person, ...location}

console.log(JSON.stringify(man, null, 3))



