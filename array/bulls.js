function countBullsAndCows(a, b) {
    var countBulls = 0;
    var countCows = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            countBulls++;
        } else {
            if (b.includes(a[i])) {
                countCows++;
            }
        }
    }
    return `Bulls ${countBulls}, Cows ${countCows}`;
}
console.log(countBullsAndCows("1234", "1562"));