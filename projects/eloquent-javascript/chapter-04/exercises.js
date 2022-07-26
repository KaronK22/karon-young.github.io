////////////////////////////////////////////////////////////////////////////////
// // range ///////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
function range(start, end, step = start <= end ? 1 : -1) {
  let result = [];
  // loop iterates up for positive step values
  // and iterates down for negative step values
  for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
    result.push(i);
  }
  return result;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
var total = 0;

while(arr.length > 0){
    total = total + arr.pop();
}
return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  var output = [];
  for (var i = arr.length; i > 0; i--){
    output.push(arr[i-1])
  }

  return output;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
let temp;
for (let i = 0;i < arr.length / 2; i++){
temp = arr[i]
arr[i] = arr[arr.length -1 - i] 
arr[arr.length - 1- i] = temp
}
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let result = {};
  if (Array.isArray(array)) {
    let currListItem = result;
    for (let item of array) {
      let newListItem = {
      	value: item,
      	rest: null
      };
      if (typeof currListItem.rest === 'undefined') {
        result = newListItem;
      } else {
      	currListItem.rest = newListItem;
      }
      currListItem = newListItem;
    }
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  return listToArray(list)[number];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
