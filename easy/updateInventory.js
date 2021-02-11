function updateInventory(curInv, newInv) {
  for (let i = 0; i < newInv.length; i++) {
    const doesItemExistInCurInv = (item) => {
      let doesItemExistInCurInv = -1;
      for (let i = 0; i < curInv.length; i++) {
        const itemFound = curInv[i][1] === item;
        if (itemFound) {
          doesItemExistInCurInv = i;
          break;
        }
      }
      return doesItemExistInCurInv;
    };

    doesItemExistInCurInv(newInv[i][1]);

    let itemIndex = doesItemExistInCurInv(newInv[i][1]);
    let itemFound = itemIndex === -1 ? false : true;

    // if found
    // add qty to item
    if (itemFound) {
      curInv[itemIndex][0] = curInv[itemIndex][0] + newInv[i][0];
    }

    // if not found
    // add new item
    if (!itemFound) {
      curInv = [...curInv, newInv[i]];
    }
  }

  curInv.sort((a,b) => (a[1] > b[1] ? 1 : -1))


  return curInv;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv)
