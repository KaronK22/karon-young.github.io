/**
* Part 2
*
* In this file, we're going to create some
* Functions to work with our data created in
* data.js.
*
* See the README for detailed instructions,
* and read every instruction carefully.
*/

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, string) {
  var found = null;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === string) {
      found = arr[i];
    }
  } return found;

} console.log(search(animals, 'Jerome'));

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// var otter = {
//   name: 'ottis',
//   age: 23,
// };


function replace(animalArr, noa, repl) {
  for (var i = 0; i <= animalArr.length - 1; i++) {
    if (animalArr[i]['name'] === noa) {
      animalArr[i] = repl;
      console.log(animalArr[i])
    }
  } return animalArr;


} //console.log(replace(animals, 'snack', otter))



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(aniArr, name){
  for (var i = 0; i <= aniArr.length - 1; i++){
  if (aniArr[i]['name'] === name){
      aniArr.splice(aniArr[i], 1);
  }
  }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(aniArr, animal){
  for (var i = 0; i <= aniArr.length - 1; i++){
    if(aniArr[i]['name'].length > 0){
      if(aniArr[i]['species'].length > 0){
        if (aniArr.filter(function(e) { return e.name === animal['name']; }).length === 0) {
         aniArr.push(animal);
        }
      }
    }
    
    } console.log(aniArr);  
    return aniArr;
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports.search = search || null;
  module.exports.replace = replace || null;
  module.exports.remove = remove || null;
  module.exports.add = add || null;
}
