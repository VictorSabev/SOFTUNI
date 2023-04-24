// Task 5 - Training Lab

function Demo(input) {
  let roomLenght = input[0] * 100;
  let roomWidth = input[1] * 100;

  let roomS = roomLenght * roomWidth;

  let workingStationW = 70;
  let workingStationL = 120;

  let rolls = Math.floor((roomWidth - 100) / workingStationW);
  let comlumns = Math.floor(roomLenght / workingStationL);
  let workingStationsNumber = rolls * comlumns - 3;

  console.log(workingStationsNumber);
}

Demo(['15', '8.9']);
Demo(['8.4', '5.2']);
