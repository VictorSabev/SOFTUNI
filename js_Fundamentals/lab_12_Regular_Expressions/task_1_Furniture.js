// Task 1 - Furniture

function furniture(input) {
  let pattern =
    />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+[\.]?\d+)!(?<quantity>\d+)/g;

  let index = 0;
  let command = input[index];
  index++;

  let totalCost = 0;

  console.log('Bought furniture:');

  while (command !== 'Purchase') {
    let matches = command.matchAll(pattern);

    if (matches !== null) {
      for (const match of matches) {
        console.log(match.groups.name);
        totalCost += Number(match.groups.price) * Number(match.groups.quantity);
      }
    }

    command = input[index];
    index++;
  }

  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
furniture([
  '>>Laptop<<312.2323!3',
  '>>TV<<300.21314!5',
  '>Invalid<<!5',
  '>>TV<<300.21314!20',
  '>>Invalid<!5',
  '>>TV<<30.21314!5',
  '>>Invalid<<!!5',
  'Purchase',
]);
furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);
