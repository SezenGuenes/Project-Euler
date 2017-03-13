var num = 4000000;
var sum = 2;

var current1 = 1;
var current2 = 2;

for (var i = 1; current2 <= num; i++) {
    var next = current1 + current2;
    if (next % 2 == 0) {
        sum += next;
    }

    current1 = current2;
    current2 = next;
}
console.log(sum);