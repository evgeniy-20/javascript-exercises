var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }

    return "The fifth letter of your name is " + name[6] + ".";
};
console.log(fifthLetter("Evgeniy"));
console.log(fifthLetter("Evgen"));