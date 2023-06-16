// Task 10 - Build a Wall

function wallBuilding(progress) {
  progress.sort((a, b) => a - b);
  let newProgress = progress.slice(0);

  const cubicYardsPerFoot = 195;
  const cost = 1900;

  let feetCount = 0;
  let cubicYardsCount = 0;
  let concreteArray = [];

  while (newProgress[0] < 30) {
    newProgress = newProgress.map((a) => {
      if (a < 30) {
        feetCount++;
        cubicYardsCount++;
        return a + 1;
      } else {
        return a;
      }
    });
    cubicYardsCount = cubicYardsCount * cubicYardsPerFoot;
    concreteArray.push(cubicYardsCount);
    cubicYardsCount = 0;
  }

  const totalCubicYardsUsed = cubicYardsPerFoot * feetCount;
  const totalCost = cost * totalCubicYardsUsed;
  console.log(concreteArray.join(', '));
  console.log(`${totalCost} pesos`);
}

wallBuilding([21, 25, 28]);
wallBuilding([17]);
wallBuilding([17, 22, 17, 19, 17]);
