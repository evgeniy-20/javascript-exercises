var count = 0;
function countO(a) {
    for (var i = 0; i < a.length; i++) {
        var letter = a[i];
        if (letter === "o") {
            count++;
        }
    }
    return count;
}
console.log(countO("I'm goooood!"));