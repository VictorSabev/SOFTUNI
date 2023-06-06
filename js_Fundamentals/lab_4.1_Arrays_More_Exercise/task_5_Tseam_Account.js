// Task 5 - Tseam Account

function steamAccount(array) {
  let index = 0;
  let command = array[index];
  index++;

  while (command !== 'Play!') {
    switch (command) {
      case 'Install':
        break;
      case 'Uninstall':
        break;
      case 'Update':
        break;
      case 'Expansion':
        break;
    }

    command = array[index];
    index++;
  }
}

steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
