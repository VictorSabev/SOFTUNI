// sumPairs

arrayOfNumbers = [1, 2, 4, 5, 6, 7, 8];


let newArray = [];
        for (let i = 0; i < arrayOfNumbers.length; i = i + 2) {
          let sumPairs = arrayOfNumbers[i] + arrayOfNumbers[i + 1];
          if (isNaN(sumPairs)) {
            sumPairs = arrayOfNumbers[arrayOfNumbers.length - 1];
          }
          newArray.push(sumPairs);
        }
        arrayOfNumbers = newArray.slice(0);
        console.log(newArray);