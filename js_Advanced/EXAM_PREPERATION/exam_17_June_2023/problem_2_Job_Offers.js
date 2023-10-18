// Problem 2 - Job Offers

class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let uniqueNames = [];
    for (let element of candidates) {
      let [name, education, yearsExperience] = element.split('-');
      if (!uniqueNames.includes(name)) {
        let currentPerson = this.jobCandidates.find((x) => x.name === name);
        if (!currentPerson) {
          this.jobCandidates.push({
            name,
            education,
            yearsExperience,
          });
        } else {
          if (Number(yearsExperience) > Number(currentPerson.yearsExperience)) {
            currentPerson.yearsExperience = Number(yearsExperience);
          }
        }
        uniqueNames.push(name);
      }
    }
    let result =
      'You successfully added candidates: ' + uniqueNames.join(', ') + '.';
    return result;
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split('-');
    let currentPerson = this.jobCandidates.find((x) => x.name === name);

    if (!currentPerson) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (Number(currentPerson.yearsExperience) < Number(minimalExperience)) {
      throw new Error(
        `${name} does not have enough experience as ${
          this.position
        }, minimum requirement is ${Number(minimalExperience)} years.`
      );
    }

    currentPerson.yearsExperience = 'hired';
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    let currentCandidate = this.jobCandidates.find((x) => x.name === name);

    if (!currentCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (currentCandidate.education === 'Bachelor') {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (currentCandidate.education === 'Master') {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.length < 1) {
      throw new Error('Candidate Database is empty!');
    }

    let result = [];
    this.jobCandidates.forEach((x) =>
      result.push(`${x.name}-${x.yearsExperience}`)
    );

    result.sort((a, b) => a.localeCompare(b));
    result.unshift('Candidate list:');

    return result.join('\n');
  }
}

let Jobs = new JobOffers('Google', 'Strategy Analyst');
console.log(
  Jobs.jobApplication([
    'John Doe-Bachelor-10',
    'Peter Parker-Master-5',
    'Jordan Cole-High School-5',
    'Daniel Jones- Bachelor-18',
  ])
);
console.log(Jobs.jobOffer('John Doe-8'));
console.log(Jobs.jobOffer('Peter Parker-4'));
console.log(Jobs.jobOffer('Jordan Cole-4'));
console.log(Jobs.salaryBonus('Jordan Cole'));
console.log(Jobs.salaryBonus('John Doe'));
console.log(Jobs.candidatesDatabase());
