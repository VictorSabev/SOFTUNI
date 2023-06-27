// Task 6 - Songs

function sortSongs(input) {
  let numberOfSongs = input.shift();
  let targetCategory = input.pop();
  let targetCategoryList = [];
  class Song {
    constructor(typeList, name, time) {
      this.typeList;
      this.name;
      this.time;
    }
  }

  for (let i = 0; i < numberOfSongs; i++) {
    let songInfo = input[i];
    let [songType, songName, songDuration] = songInfo.split('_');
    let currentSong = new Song(songType, songName, songDuration);
    if (songType === targetCategory || targetCategory === 'all') {
      targetCategoryList.push(songName);
    }
  }
  console.log(targetCategoryList.join('\n'));
}
sortSongs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
console.log('----------');
sortSongs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
console.log('----------');
sortSongs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
