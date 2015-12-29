var grid = {};
var turn = function (change, firstX, firstY, secondX, secondY) {
  if(change === 'toggle')
  var i = firstX;
  while(i !== secondX) {

    var j = firstY;
    while(j !== secondY) {

      grid[j + ',' + secondY] = change;
      j++;
    }
    i++;
  }

  return grid;
};


var output = turn('off', 660, 55, 986, 197);
console.log(output);
