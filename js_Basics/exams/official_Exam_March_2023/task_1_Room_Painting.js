// Task 1 - Room Painting

function Demo(input) {
  let numberOfPaintBuckets = Number(input[0]);
  let numberOFWallpaper = Number(input[1]);
  let glovesPrice = Number(input[2]);
  let brushPrice = Number(input[3]);

  let paintPrice = 21.5;
  let wallpaperPrice = 5.2;
  let numberOfGloves = Math.ceil(0.35 * numberOFWallpaper);
  let brushNuber = Math.floor(0.48 * numberOfPaintBuckets);

  let subTotal = numberOfPaintBuckets * paintPrice + numberOFWallpaper * wallpaperPrice + numberOfGloves * glovesPrice + brushNuber * brushPrice;
  let shipping = (1 / 15) * subTotal;

  console.log(`This delivery will cost ${shipping.toFixed(2)} lv.`);
}

Demo(['10', '8', '2.2', '5']);
Demo(['21', '18', '5', '2.2']);
