var sumOfSquares = 0;
var squareOfSum = 0;

for (var i = 1; i <= 100; i++) {
    sumOfSquares += i * i
}

for (var j = 1; j <= 100; j++) {
    squareOfSum += j;
}
squareOfSum *= squareOfSum;

var diff = 0;
diff = squareOfSum - sumOfSquares;
console.log(diff);