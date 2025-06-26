function cuadrado(x) {
    return x * x;
};

const cuadrado2 = (x) => x * x;

const resultado = (x) => {
    console.log(`This is the square of ${x} using cuadrado: ${cuadrado(x)} `);
    console.log(`This is the square of ${x} using cuadrado2: ${cuadrado2(x)} `);
}

resultado(3);

const text = "Hi, my name is Andrea";
const replacement = text.replace(/[ae]/gi, "0");
console.log(replacement);

const people = [
    {name: "Raul", age: 15},
    {name: "Armando", age: 25},
    {name: "Alex", age: 56},
    {name: "Sophie", age: 32},
    {name: "Maria", age: 16},
    {name: "Paul", age: 18}
];

const adults = people.filter(p => p.age > 18);
for (const adult of adults) {
    console.log(`this person is an adult ${adult.name}`);
}


const a = { x: 1 };
const b = { x: 1 };
console.log(a === b); 


let obj = {};
console.log(obj.prop); 

const users = [
    {name: "Adriana", age: "60"},
    {name: "Norma", age: "12"},
    {name: "Jesus", age: "84"},
    {name: "Rafael", age: "35"},
    {name: "Maria", age: "26"},
    {name: "Ruben", age: "16"},
    {name: "Tony", age: "90"},
    {name: "Kate", age: "46"},
];

const workingPeople = users.filter(w => w.age > 18 && w.age < 80);
workingPeople.sort((a, b) => a.age - b.age);

for (const worker of workingPeople) {
    console.log(`this person is an adult ${worker.name}`);
}

const grouped = users.reduce((acc, user) => {
    const key = user.age > 18 ? 'mayores' : 'menores';
    acc[key] = acc[key] || [];
    acc[key].push(user);
    return acc;
}, {});

for (const mayor of grouped.mayores) {
    console.log(`esta persona esta en el grupo de los mayores ${mayor.name}`);
}
for (const menor of grouped.menores) {
    console.log(`esta persona esta en el grupo de los menores ${menor.name}`);
}

