function palindrom(word) {
    var palindrom = word.split('');
    var checkPalindrom = [];
    var pointer = palindrom.length - 1;

    for (var i = 0; i < palindrom.length; i++) {
        checkPalindrom[pointer] = palindrom[i];
        pointer--;
    }

    var string1 = palindrom.join("");
    var string2 = checkPalindrom.join("");

    if (string1 == string2) {
        return true;
    }

    else {
        return false;
    }

}

var array = [];
var maxPal = 10000;

for (var i = 100; i < 999; i++) {
    for (var j = i; j < 999; j++) {
        var mul = i * j;
        var n = mul.toString();
        if (palindrom(n)) {
            if ((i * j) > maxPal) {
                maxPal = i * j;
            }
        }
    }
}

console.log(maxPal);

