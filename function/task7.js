var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }

    return "The fifth letter of your name is " + name[4] + ".";
};
console.log(fifthLetter("Evgeniy"));
console.log(fifthLetter("Evge"));