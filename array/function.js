var a = function (argument1, argument2) {
    if (argument1 !== argument2) {
        return true;
    }
    for (var i =0; i < argument1; i++) {
        if (argument1[i] !== argument2[i]) {
            return false;
        }
    }
};
console.log(a(false, true));