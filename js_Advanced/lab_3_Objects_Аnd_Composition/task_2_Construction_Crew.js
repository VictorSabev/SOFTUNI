// Task 2 - Construction Crew

function objDemo(worker) {
  let requiredAmountOfWater = 0.1 * worker.weight * worker.experience;
  if (worker.dizziness) {
    worker.levelOfHydrated += requiredAmountOfWater;
    worker.dizziness = false;
  }

  return worker;
}

objDemo({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
