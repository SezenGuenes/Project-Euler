var found = false;
var i = 1;

while (!found) {
    found = true;
    for (var j = 1; j < 20; j++) {
        if ((i % j) != 0) {
            found = false;
            i++;
        }
    }
}

console.log(i);