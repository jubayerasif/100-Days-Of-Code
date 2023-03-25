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
let userAge = 75;
let hobbies = ["Cricket", "Cooking", "Watching"];
let job = {
  title: "Cricketer",
  place: "America",
  salary: 5000,
};

let adultYears;

function calculateAdultYears() {
    adultYears = userAge - 18;
}

calculateAdultYears();
alert(adultYears);

userAge = 70;
adultYears = userAge - 18;

alert(adultYears);
