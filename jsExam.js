import _ from "lodash";

//{name: 'Maksim'} === {name: 'Maksim'}
const user = {name: 'Maksim'};
const user2 = {name: 'Maksim'};
const user3 = user;
console.log(user2 === user);
console.log(user3 === user);
console.log(user2.name === user.name);

console.log(_.isEqual(user2, user));

const splitLine = stringLine => {
    stringLine.split('')
};

const word = 'word';

//console.log(splitLine(word));

const array = [13, 56, 34, 67, 11, 15];

const sum = (...numbers) => numbers.reduce((a,b) => a+b);

//console.log(sum(...array));

const cities = [
    {city: "Minsk", population: 2000000},
    {city: "Mexico City", population: 9209944}, 
    {city: "Tashkent", population: 4000000}
];

const displayObjectProperties = (arrObject) => {
    for (const object of arrObject) {
        console.log(object.city);
    }
}

const sortByPopulation = [...cities].sort((a,b) => b.population - a.population);

displayObjectProperties(sortByPopulation);