/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding
    Defaults to the global window 
* 2.  Implicit Binding
 When using a dot, this refrences that object specifically
* 3.  New binding
 binds this to the new object that's being created
* 4.  Explicit binding
Whenever JavaScript’s call or apply method is used, this is explicitly defined.
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
  console.log(this);
  return name;
}
sayName("Haku");
// code example for Window Binding

// Principle 2
const myObj = {
  greeting: 'Meow',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Haku');
// code example for Implicit Binding

// Principle 3
var MyCat = function (){
    this.name = 'haku';
    this.breed = 'scottish fold';
  };
 
  MyCat.prototype.meow = function () {
    console.log(this.name + ' is a ' + this.breed  + '!');
  }
 
  var obj = new MyCat();
  obj.meow('MEOW');

// code example for New Binding

// Principle 4
var cat = {
    name: 'Haku',
    printName: function printName() {
      console.log(this.name);
    }
  }
  
  var name = 'Theo';
  
  var printNameAgain = cat.printName;
  
  printNameAgain.call(cat);
// code example for Explicit Binding