// Task 6 - Gramophone

function gramophone(band, album, song) {
  const bandName = band;
  const albumName = album;
  const songName = song;
  const fullRotation = 2.5;

  let totalDuration = (albumName.length * bandName.length * songName.length) / 2;
  let rotations = totalDuration / fullRotation;
  console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
