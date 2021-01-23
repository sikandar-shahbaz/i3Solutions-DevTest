export function isValidWalk(walk: string[]) {
  var compassEastWest = {
    'e': 1,
    'w': -1
  };
  var compassNorthSouth = {
    'n': 1,
    's': -1
  };
  var eastWest = 0;
  var northSouth = 0;
  for(let i = 0; i < walk.length; i++){
      let current = walk[i];
      if(current in compassEastWest){
        eastWest += compassEastWest[current];
      }
      else{
        northSouth += compassNorthSouth[current];
      }
  };
  if(walk.length == 10 && eastWest == 0 && northSouth == 0){
      return true;
  }
  else{
      return false;
  }
}

