// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I:A string 
O:The length of string inputted 
C:N/A
E:N/A
*/
function length(string) {
    // YOUR CODE BELOW HERE //


    // find length of string 
    return string.length;



    // YOUR CODE ABOVE HERE //
} 
//loging results to console 
console.log(length('string'));
/**
 * Given an input String, return a new String forced to lowercase.
 */
/* 
I: a string
O: change the string inputed to lower case 
C:N/A
E:N/A
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
  //changing input to lower case letters 
    
  return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I:a string 
O: converting a string to uppercase 
C:N/A 
E:N/A 
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//making the parameter string upercase   
    
  return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: A string 
O: dash-case version of string outputs must be lowercase
C: outputs must be lowercase
E:N/A
*/
function toDashCase(string) {

    // YOUR CODE BELOW HERE //
   //splitting string at the space
  var splitStr = string.split(' ') 
  //return joined str in lowercase                                                              
   return splitStr.join('-').toLowerCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //
    if (char.toLowerCase() === string[0].toLowerCase()){
    return true;
                        } else {return false;
                        
                        }
      
    // YOUR CODE ABOVE HERE //
}
/** 
                        
                        
                        
 Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */                       
                        
                        
                        
                        
                        
                        
 
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
  // make conditional statement that compares last string index with a character 
  if (char.toLowerCase() === string.slice(-1).toLowerCase()){
    return true;
                        } else {return false;
                        
                        } 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //pulling out arguments and storing them into an array called arguments 
    var args = Array.from(arguments);

    return args.join('');
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //make a conditional statement comnparing the length of the to strings returning the longest
if (stringOne.length > stringTwo.length){
    return stringOne;
} else return stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

    function sortAscending(stringOne, stringTwo) {

    // YOUR CODE BELOW HERE //
  //create variable and assing 


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
