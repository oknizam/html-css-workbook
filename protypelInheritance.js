
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " --speaks")
}

function Dog(name, breed) {
  Animal.call(this, name); //inherit propoties
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // this will breaks orginal constructor refrence
Dog.prototype.constructor = Dog; // here we restoring it

const d = new Dog("bruno", "husky");
d.speak();