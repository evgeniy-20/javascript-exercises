var medalForScore = function (score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }

    return "Gold";
};
console.log(medalForScore(2));