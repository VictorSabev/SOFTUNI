class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let newPlayers = [];
    for (let player of footballPlayers) {
      let [name, age, playerValue] = player.split('/');
      let currentPlayer = this.invitedPlayers.find((x) => x.name === name);

      if (currentPlayer) {
        if (playerValue > currentPlayer.playerValue) {
          currentPlayer.playerValue = playerValue;
        }
      } else {
        this.invitedPlayers.push({
          name,
          age,
          playerValue,
        });
      }
      if (!newPlayers.includes(name)) newPlayers.push(name);
    }

    return `You successfully invite ${newPlayers.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split('/');
    let currentPlayer = this.invitedPlayers.find((x) => x.name === name);

    if (!currentPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (playerOffer < currentPlayer.playerValue) {
      let priceDifference = currentPlayer.playerValue - playerOffer;
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
      );
    }

    currentPlayer.playerValue = 'Bought';

    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    let currentPlayer = this.invitedPlayers.find((x) => x.name === name);

    if (!currentPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (currentPlayer.age < age) {
      let ageDifference = age - currentPlayer.age;
      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else if (ageDifference > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    }
    if (currentPlayer.age >= age) {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    let reuslt = ['Players list:'];

    this.invitedPlayers.sort((a, b) => {
      a.name.localeCompare(b.name);
    });

    this.invitedPlayers.forEach((x) =>
      reuslt.push(`Player ${x.name}-${x.playerValue}`)
    );

    return reuslt.join('\n');
  }
}

let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(
  fTeam.newAdditions([
    'Kylian Mbappé/23/160',
    'Lionel Messi/35/50',
    'Pau Torres/25/52',
  ])
);
console.log(fTeam.signContract('Kylian Mbappé/240'));
console.log(fTeam.ageLimit('Kylian Mbappé', 30));
console.log(fTeam.transferWindowResult());
