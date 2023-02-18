// Zadacha 7 - Hotel Room

function Demo(input) {
  let month = input[0];
  let stayPeriod = Number(input[1]);

  let discountApartament = 0;
  let discountStudio = 0;
  let studioPricePerDar = 0;
  let apartamentPricePerDay = 0;

  if (month === 'May' || month === 'October') {
    if (stayPeriod > 7 && stayPeriod <= 14) {
      discountStudio = 0.05;
    } else if (stayPeriod > 14) {
      discountStudio = 0.3;
    }
    studioPricePerDar = 50;
    apartamentPricePerDay = 65;
  } else if (month === 'June' || month === 'September') {
      if (stayPeriod > 14) {
        discountStudio = 0.2;
      }
    studioPricePerDar = 75.2;
    apartamentPricePerDay = 68.7;
  } else if (month === 'July' || month === 'August') {
    studioPricePerDar = 76;
    apartamentPricePerDay = 77;
  }

  if (stayPeriod > 14 ) {
    discountApartament = 0.1;
  }
  
  let totalApartmentSum = (stayPeriod * (apartamentPricePerDay - apartamentPricePerDay * discountApartament)).toFixed(2);
  let totalStudioSum = (stayPeriod * (studioPricePerDar - studioPricePerDar * discountStudio)).toFixed(2)

  console.log(`Apartment: ${totalApartmentSum} lv.`);
  console.log(`Studio: ${totalStudioSum} lv.`);

}


Demo(['May', '15']);
Demo(['June', '14']);
Demo(['August', '20']);
