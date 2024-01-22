for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Any", "Max", "Chris"];

for (const user of users) {
  console.log(user);
}
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

const loggedInUser = {
  name: "Jubayer",
  age: 18,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");