//LOOPS - loops can be used if you need to execute a block of code multiple times 
/* types of loops include:
for
for/in
for/of
while 
do while
etc

with a for loop you can loop through a block of code many time 
*/
/*Example : if you wanted to the console to log a count of 1-20 

you wouldn't want to have to keep console.logging 

every number => console.log(1);
                console.log(2);
                console.log(3);
                etc..
so you woud use a loop 

*/

for (var i = 1; i <= 20; i++){
    console.log(i);
    } 
    
    /*"for(var i =1;" ==/> intialization:  here you are 
                      telling loop
                       where to start since we are
                          counting 1-20 we start at 1 so i is 1
                          
                          
    "i <= 100" ===/>      here you are telling the program where yo want to end the loop since we  
                          are stopping at 100, we stop the loop when the i is less than or equal to 100 condition becomes false 
    
    "i++" ===/>       this is telling the program to keep incrementing our loop by one until the stop condition shown above is false                         
                      18==/> returns true
                      19 ==/> returns true 
                      20 ==/> return true 
                      21 ==/> returns false loop will stop at 20 since 21 will make the stop condition false
    
    we can also stop the loop early by introducing a break condition like so */
    console.log('example 1 part 2 breaks')
    for (var i = 1; i <= 20; i++){
    console.log(i);
    if (i === 5) break;
    }
    
    //you can also reverse this and count down from 100 by just flipping the loop like so..
    
    
    
    
    console.log('EXAMPLE 2 Reverse!                ');
    for (var i = 20; i >= 1; i--){
      console.log(i);
    }
    
    //here we used th same concept but flipped starting at 20 and decrementing by 1 until we reached the number 1
    console.log('EXAMPLE 3 ');
    let names = ['mike','tev','dooda'];
    
    // for loops are commonly used to iterate through arrays by their indexes like so 
    for (var i = 0;i <= names.length - 1;i++){
    console.log(names[i]);
    }
    
    //FOR of loops
    /* an easier way to loop through an array is using a for of loop.
    a for of loop deconstructs the array assigning each value to variable like so */
    console.log('EXAMPLE 4 for of');
    
    
    for (name of names ){
    console.log(name); 
    }
    
    /*as you can see doing a for of is a simpler way of looping through an array 
    */
    
    
    // for in
    /*this will loop through the properties of an object 
    */
    //EXAMPLE 5:
    console.log('Example 5 for in');
     var myObj = {
       name:'john',
       age:30,
       single: true,
     }
    
    for (key in myObj) console.log(myObj[key]);
    
    
    
    //it is looping through each key and logging the values of that key 
    /* first iteration ==/> console.log(myObj['name']);
      
       second iteration ==/> console.log(myObj['age']);
    
       third iteration ==/> console.log(myObj['single']);
    */
    
    //while loop 
    /* a while loop loops through a block of code while a specified condition is true 
    
    with a while loop you declare the index outside of the loop 
    */ 
    //EXAMPLE 6
    console.log('example 6 While loop');
    var i = 0 
    while(i < 20){
      console.log(i);
      i++;
    }
    
    //DO While 
    /* a do while loop is similar to the while loop except it runs 
    a block of code before it checks the condition
    */
    //Example 
    console.log('Example 7');
    var i = 0
    do{
      i++;
      console.log(i);
    } while(i < 0);