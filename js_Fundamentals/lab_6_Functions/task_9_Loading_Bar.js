// Task 9 - Loading Bar

function loadingBar(progress) {
  if (progress === 100) {
    console.log('100% Complete!');
  } else {
    // let result = '..........';                       // moe reshenie
    // let resultArray = result.split('');
    // let progressCount = progress / 10;

    // for (let i = 0; i < progressCount; i++) {
    //   resultArray[i] = '%';
    // }

    // let resultString = resultArray.join('');
    // console.log(`${progress}% [${resultString}]`);

    let percentCount = '%'.repeat(progress / 10);
    let dotCount = '.'.repeat(10 - progress / 10); // alternativno:     let dotCount = '.'.repeat(10 - percentCount.length);

    console.log(`${progress}% [${percentCount}${dotCount}]`);
    console.log('Still loading...');
  }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
