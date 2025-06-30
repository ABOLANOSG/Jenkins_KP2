//How we can convert splitLine() into one line?
function splitLine(stringLine) {
   return stringLine.split('');
}

const word = 'word';

const splitLine2 = (stringText) => stringText.split('');

console.log(splitLine2(word));

const array = [2, 4, 6, 8, 10];

//multiply * 2 and return a new array

const arrMultiply = array.map(a => a*2);

console.log(arrMultiply);

const cities = [{city: "Minsk", population: 2000000}, {city: "Mexico City", population: 9209944}, {city: "Tashkent", population: 4000000}];

const filteredCities = cities.filter(c => c.population > 2000000);

for (const citie of filteredCities) {
    console.log(`this are the cities filtered ${citie.city}`);
}


const array2 = [13, 56, 34, 67, 11, 15];

function sum(...args) {

 let result = 0;

 args.forEach((element) => {

  result += element;

 });

 return result;

}

console.log(sum(...array2));
