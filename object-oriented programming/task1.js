var dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
};
console.log(dog.name);
dog.age = 6;
console.log(dog);
dog.bark = function () {
   console.log("Woof woof! My name is " + this.name + "!");
};
dog.bark();