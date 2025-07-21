const users = [
  { id: 1, name: "AliceS", age: 27, role: "Admin" },
  { id: 2, name: "Bob", age: 30, role: "User" },
  { id: 3, name: "Charlie", age: 35, role: "User" },
  { id: 4, name: "AliceB", age: 23, role: "Admin" },
  { id: 5, name: "Eve", age: 28, role: "User" }
];
 //25 age with admin role
const filteredUsers = users.filter(user => user.age > 25 && user.role === "Admin");

/*for (const user of filteredUsers) {
    console.log(user.name);
}*/

/*const sortedUsers = users.sort((a, b) => a.age - b.age);

for (const user of sortedUsers) {
    console.log(user.name);
}*/

const groups = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] =[];
    }
    acc[user.role].push(user);
    return acc;

}, {});

console.log(groups);