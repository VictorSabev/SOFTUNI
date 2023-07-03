// Task 2 - Towns

function townsLocation(inputArray) {
  for (let i of inputArray) {
    let [town, latitude, longitude] = i.split(' | ');
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    let townInfo = {
      town: town,
      latitude: latitude,
      longitude: longitude,
    };
    console.log(townInfo);
  }
} 

townsLocation(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
townsLocation(['Plovdiv | 136.45 | 812.575']);
