// Task 4 -

function Demo(input) {
  let numberOfPC = Number(input[0]);
  let code = 0;
  let rating = 0;
  let sales = 0;

  let salesCounter = 0;
  let ratingcount = 0;

  for (let i = 1; i <= numberOfPC; i++) {
    code = input[i];
    rating = Number(code.substr(2));
    sales = Number(code.substring(0, 2));

    switch (rating) {
      case 2:
        ratingcount += rating;
        break;
      case 3:
        ratingcount += rating;
        salesCounter = salesCounter + 0.5 * sales;
        break;
      case 4:
        ratingcount += rating;
        salesCounter = salesCounter + 0.7 * sales;
        break;
      case 5:
        ratingcount += rating;
        salesCounter = salesCounter + 0.85 * sales;
        break;
      case 6:
        ratingcount += rating;
        salesCounter += sales;
        break;
    }
  }

  let avgRating = ratingcount / numberOfPC;

  console.log(salesCounter.toFixed(2));
  console.log(avgRating.toFixed(2));
}

Demo(['3', '103', '103', '103']);
Demo(['5', '122', '156', '202', '214', '185']);
Demo(['2', '204', '206']);
