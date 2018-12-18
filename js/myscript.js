function closure() {
  var date = new Date();

  function time() {
    return date.getTime();
  }

  return time;
}
var close = closure()();

// Prototype:
function Animal(name, locomotion) {
  this.locomotion = locomotion || 'crawl';
  this.name = name;
}

// All Animals Common Behavior.
Animal.prototype.locomote = function() {
  return this.name + ' can ' + this.locomotion;
};

function Person(firstName) {
  this.firstName = firstName || 'Anonymous';
  Animal.bind(this)(this.firstName, 'walk'); // super
}

// These Two Lines Complete the Inheritance Chain.
Person.prototype = Object.create(Animal.prototype);
Person.prototype.constructor = Person;

var human = new Person();

human.speak = function() {
  console.log(this.name + ' is screaming');
};

human.speak();
