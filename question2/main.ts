export function findOutlier(integers: number[]) {
    var even = 0;
    var odd  = 0;
    
    for(let i = 0; i < 3; i++){
      let current = integers[i];
      current % 2 == 0 ? even += 1 : odd += 1;
    }
    var arrayIsEven = even > odd ? arrayIsEven = true : false;
    
    if(arrayIsEven){
      return integers.find(findOdd);
    }
    else{
      return integers.find(findEven);
    }
}

function findOdd(integer) {
  return integer % 2 != 0;
}

function findEven(integer) {
  return integer % 2 == 0;
}
