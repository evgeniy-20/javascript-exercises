var timeUp = function ()  {
    console.log("Time's up!");
};
setTimeout(timeUp,3000);
setTimeout(timeUp,5000);
var doHomeworkAlarm = function () {
  console.log("Hey! You need to do your homework!");
};
var timeoutId = setTimeout(doHomeworkAlarm, 60000);
clearInterval(timeoutId);