// Zadacha 8 - On Time for the Exam

function Demo(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);
  let resultMin = 0;
  let resultHr = 0;

  if (
    arrivalHour > examHour ||
    (arrivalHour === examHour && arrivalMinute > examMinute)
  ) {
    console.log('Late');
    if (examHour < arrivalHour && 60 + examMinute - arrivalMinute > 60) {
      resultHr = arrivalHour - examHour;
      resultMin = 60 - examMinute - arrivalMinute;
      console.log(`${resultHr}:${resultMin} hours after the start`);
    } else if (examHour > arrivalHour && examMinute === arrivalMinute) {
      resultHr = examHour - arrivalHour;
      resultMin = examMinute - arrivalMinute;
      if (resultMin < 10) {
        resultMin = '0'+resultMin; 
      }
      console.log(`${resultHr}:${resultMin} hours before the start`);
    }
     else if (
      examHour === arrivalHour &&
      60 + examMinute - arrivalMinute < 60
    ) {    
    resultMin = examMinute - arrivalMinute;
    console.log(`${resultMin} minutes before the start`);
  }
  } else if (
    (arrivalHour === examHour && examMinute >= arrivalMinute) ||
    (arrivalHour < examHour && 60 + examMinute - arrivalMinute) <= 30
  ) {
    console.log('On time');
  } //else if (arrivalHour === examHour && ((examMinute - arrivalMinute) > 30) || ((arrivalHour < examHour && (60 + examMinute - arrivalMinute)) > 30)){
  else {
    console.log('Early');
    if (examHour > arrivalHour && 60 + examMinute - arrivalMinute > 60) {
      resultHr = examHour - arrivalHour;
      resultMin = 60 - examMinute - arrivalMinute;
      console.log(`${resultHr}:${resultMin} hours before the start`);
    } else if (examHour > arrivalHour && examMinute === arrivalMinute) {
      resultHr = examHour - arrivalHour;
      resultMin = examMinute - arrivalMinute;
      if (resultMin < 10) {
        resultMin = '0'+resultMin; 
      }
      console.log(`${resultHr}:${resultMin} hours before the start`);
    }
     else if (
      examHour === arrivalHour &&
      60 + examMinute - arrivalMinute < 60
    ) {    
    resultMin = examMinute - arrivalMinute;
    console.log(`${resultMin} minutes before the start`);
  }
}
}
//if (examHour === arrivalHour && arrivalMinute !== examMinute) {
//if(
// console.log('');

Demo(['9', '30', '9', '50']);
Demo(['9', '00', '8', '30']);
Demo(['16', '00', '15', '00']);
Demo(['9', '00', '10', '30']);
Demo(['14', '00', '13', '55']);
Demo(['11', '30', '8', '12']);
Demo(['10', '00', '10', '00']);
Demo(['11', '30', '10', '55']);
Demo(['11', '30', '12', '29']);
