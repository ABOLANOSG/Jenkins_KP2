//array sum with n values
const array = [13, 56, 34, 67, 11, 15, 56, 93, 8383];

const sum = (...values) => values.reduce((acc, curr) => acc + curr, 0);
const mult = (...values) => values.map(s => s *2);
console.log("mult", mult(...array));

//console.log(sum(...array));
//array with n values even with nested
const sumNestedValues = (...values) => values.flat(Infinity).reduce((acc, curr) => acc + curr, 0);

const nestedArr = [1, 2, 3, [4, 5, [6], 7]];

//console.log(sumNestedValues(...nestedArr));

/*
function splitLine(stringLine) {
   return stringLine.split('');
} */

const splitLine = stringText => stringText.split('');

//console.log(splitLine("word"));

const cities = [
    {city: "Minsk", population: 2000000}, 
    {city: "Mexico City", population: 9209944}, 
    {city: "Tashkent", population: 4000000},
    {city: "Guadalajara", population: 1390000}
];

const largerCities = cities.filter(city => city.population > 1500000);

//console.log(largerCities);

const displayObjectProperties = (arrObject) => {
    for (const object of arrObject) {
        console.log(object.city);
    }
}

//displayObjectProperties(largerCities);

const users = [
  { id: 1, name: "Alice", age: 25, role: "Admin" },
  { id: 2, name: "Bob", age: 30, role: "User" },
  { id: 3, name: "Charlie", age: 35, role: "User" },
  { id: 4, name: "Alice", age: 25, role: "Admin" },
  { id: 5, name: "Eve", age: 28, role: "User" }
];
//check if element exist
//console.log(users.some(user => user.name === "Alice"));

const displayUsersProperties = (arrObject) => {
    for (const object of arrObject) {
        console.log(object.name);
    }
}

const admins = users.filter(user => user.role === "Admin");

//displayUsersProperties(admins);

//returns a new array with only UNIQUE USERS
const uniqueUsers = users.filter((user, index, self) => 
index === self.findIndex(u => u.name === user.name && u.age === user.age));

//displayUsersProperties(uniqueUsers);

//sortByAge

const sortByAge = [...users].sort((a,b) => a.age - b.age);

//displayUsersProperties(sortByAge);

//sortByName

const sortByName = [...users].sort((a,b) => a.name.localeCompare(b.name));

//displayUsersProperties(sortByName);

const groupedByRole = users.reduce((group, user) => {
    group[user.role] = group[user.role] || [];
    group[user.role].push(user);
    return group;
}, {});

//console.log(groupedByRole);

//creates a new set without duplicates and compares with the original array 
const items = [1,2,3,4,5,2];
const hasDuplicates = new Set(items).size !== items.length;
//console.log(hasDuplicates);

//merge arrays

const a = [1,2];
const b = [3,4];

//console.log([...a, ...b]);
//console.log(a.concat(b));

const multiplication = (a.map(num => num *2));
//console.log(multiplication);

//get just the names

const names = users.map(user => user.name);
//console.log(names);

//uso de set para obtener los roles unicos

const roles = [...new Set(users.map(user => user.role))];

console.log(roles);

const user1 = { id: 2, name: "Bob", age: 30, role: "User" };
//Devuelve un array con las claves (propiedades) del objeto.
console.log(Object.keys(user1));
//Devuelve un array con los valores del objeto.
console.log(Object.values(user1));
//Devuelve un array de pares [clave, valor].
console.log(Object.entries(user1));


//Copia propiedades de uno o más objetos a otro

const extra = {role:"Admin"};
const merged = Object.assign({}, user1, extra);
console.log(merged);


const string = "Hello I am a string";

console.log(string.replaceAll("a", "i"));
console.log(string.replace(/a/g, "u"));

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = obj1;

console.log(`obj2 is equal to obj1? ${obj2 === obj1}`);
console.log(`obj3 is equal to obj1? ${obj3 === obj1}`);