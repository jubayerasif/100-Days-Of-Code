// const job = {
//     title: 'Developer',
//     location: 'New York',
//     salary: 50000,
// }

// console.log(new Data(.toISOString(job.salary), '$'));

// const job2 = {
//     title: 'Driver',
//     location: 'New York',
//     salary: 5000,
// }

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }
}

const developer = new Job('Developer', 'New York', 50000);
console.log(developer);
const driver = new Job('Driver', 'New York', 5000);
console.log(driver);