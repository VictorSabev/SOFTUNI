// Zadacha

function Demo(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);

  let n4 = 0;

  for (let i = n1; i < n2; i++) {
    let n3 = String(i);
    if (Number(n3[0]) % 2 !== 0 && Number(i[n3]) % 2 !== 0 && Number(n3[2]) % 2 !== 0 && Number(n3[3]) % 2 !== 0) {
      console.log(i);
    }
  }
}

Demo(['2345', '6789']);
//console.log('-------------------')
//Demo(["3256","6579"])
//console.log('-------------------')
//Demo(["1365","5877"])
