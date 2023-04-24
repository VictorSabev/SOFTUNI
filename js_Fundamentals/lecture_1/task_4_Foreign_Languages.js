// Task 4 - Foreign Languages

function Demo(country) {
  switch (country) {
    case 'USA':
    case 'England':
      console.log('English');
      break;
    case 'Spain':
    case 'Argentina':
    case 'Mexico':
      console.log('Spanish');
      break;
    default:
      console.log('unknown');
      break;
  }
}

Demo('USA');
Demo('Germany');
