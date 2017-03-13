var num = 600851475143;

var i = 2;
while (i <= num) {
    var prim = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            prim = false;
        }
    }

    if (prim) {
        if (num % i == 0) {
            console.log(i);
            num /= i;
            i = 2;
            continue;
        }
    }
    i++;
}
