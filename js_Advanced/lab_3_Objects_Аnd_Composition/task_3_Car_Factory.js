// Task 3 - Car Factory

function carFactory(car) {
  let power = 0;
  let volume = 0;

  if (car.power <= 90) {
    power = 90;
    volume = 1800;
  } else if (car.power > 90 && car.power <= 120) {
    power = 120;
    volume = 2400;
  } else if (car.power > 120) {
    power = 200;
    volume = 3500;
  }

  delete car.power;

  car.engine = {
    power,
    volume,
  };

  let carriage = '';

  if (car.carriage === 'hatchback') {
    carriage = 'hatchback';
  } else {
    carriage = 'coupe';
  }

  let color = '';

  color = car.color;

  delete car.color;

  car.carriage = {
    type: carriage,
    color,
  };

  let wheelsize = car.wheelsize;

  if (car.wheelsize % 2 === 0) {
    wheelsize--;
  }

  delete car.wheelsize;

  car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

  return car;
}

carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14,
});
