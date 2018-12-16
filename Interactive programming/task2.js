var counter = 1;
var printMessage = function () {
    console.log("You have been staring at your console for" + counter + " seconds");
    counter++;
};
var intervalId = setInterval(printMessage,10000);
clearInterval(intervalId);