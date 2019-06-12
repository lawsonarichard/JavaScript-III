/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding
* 2.  Implicit Binding
* 3.  New binding
* 4.  Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
let myFunction = function() {
    console.log(this.x);
}
let x = 200;
myFunction(); 
// code example for Window Binding

// Principle 2
let Haku = {
    name: 'Haku',
    greeting: function(cat) {
        console.log("Meow " + cat +", my name is " + this.name);
    }
}
Haku.greeting("world");

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding