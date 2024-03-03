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

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location}, and I make ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
// console.log(developer);
developer.describe();
const driver = new Job("Driver", "New York", 5000);
// console.log(driver);
driver.describe();
