// let greetingText = "Hi, I'm a JavaScript!";
// let date = "2025-01-01";
// alert(greetingText);
// greetingText = "Hi, I'm a React JavaScript!";
// alert(greetingText);
// alert(date);

// let userName= "Jubayer";
// let userAge = 18;
// let hobbies = ['Coding', 'Cooking', 'Watching'];
// let job = {
//     title: 'Student',
//     place: 'Bangladesh',
//     salary: 0,
// };
// alert(hobbies[0]);
// alert(job.title);

let userName = "Arnold";
let age = 75;
let hobbies = ["Cricket", "Cooking", "Watching"];
let job = {
  title: "Cricketer",
  place: "America",
  salary: 5000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  // adultYears = userAge - 18;
  let result;
  result = userAge - 18;
  return result;
  // return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);
console.log(totalAdultYears);

age = 70;
totalAdultYears = calculateAdultYears(age);

// alert(totalAdultYears);
console.log(totalAdultYears);

let person = {
  name: 'Arnold',
  greet() {
    // alert('Hello!');
    console.log('Hello!');
  }
};

person.greet();
