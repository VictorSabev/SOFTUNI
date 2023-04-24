// Task 1 - Series Calculator

function Demo(input) {
  let seriesName = input[0];
  let numberOfSeasons = Number(input[1]);
  let numberOfEpisodes = Number(input[2]);
  let episodeTime = Number(input[3]);

  let commercials = 1.2;
  let specialEpisodeTime = 10;

  let totalTime = numberOfSeasons * (numberOfEpisodes * episodeTime * commercials + specialEpisodeTime);

  console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTime)} minutes.`);
}

Demo(['Lucifer', '3', '18', '55']);
Demo(['Game of Thrones', '7', '10', '50']);
Demo(['Riverdale', '3', '21', '45']);
