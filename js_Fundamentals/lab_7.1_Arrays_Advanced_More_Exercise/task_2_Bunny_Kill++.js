// Task 2 - Bunny Kill

function bunnyMafia(matrix) {
  let bombsLocations = matrix
    .pop()
    .split('')
    .filter((a) => a !== ',' && a !== ' ')
    .map(Number);

  while (bombsLocations.lenght !== 0) {
    let index = bombsLocations.shift();
    let row = bombsLocations.shift();

    let targetY = matrix[row].split(' ').map(Number);
    let targetX = (targetY[index]);

    matrix


  }

  console.log(bombsLocations);
}

bunnyMafia(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);
bunnyMafia(['10 10 10', '10 10 10', '10 10 10', '0,0']);
