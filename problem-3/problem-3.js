"use strict";

var solution = function (input) {
    var p;
    while (input % 2 == 0) {
        input = input / 2;
        p = 2;
    }
    var orig = input;
    for (let i = 3; i < Math.sqrt(orig); i += 2) {
        var prime = true;
        for (let j = 3; j < Math.sqrt(i); j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (!prime) {
            continue;
        }
        while (input % i == 0) {
            input = input / i;
           p = i;
        }
        if(input == 1){
            break;
        }
    }
    return p;
}


var input = 600851475143;
//var start = performance.now();
var ans = solution(input);
//var end = performance.now();
console.log('Answer: ' + ans);
//console.log('Runtime: ' + (end - start) + 'ms');