var solution = function(input){
    input -= 1;
    var sum = 0;
    var multiples15 = input / 15;
    var multiples = Math.floor(multiples15 * 5);
    sum += (multiples * (multiples + 1)) * 3 / 2;
    var multiples = Math.floor(multiples15 * 3);
    sum += (multiples * (multiples + 1)) * 5 / 2;
    var multiples = Math.floor(multiples15); // number of 15 multiples
    sum -= (multiples * (multiples + 1)) * 15 / 2;
    return sum;
};

var input = 1000;
//var start = performance.now();
var ans = solution(input);
//var end = performance.now();
console.log('Answer: ' + ans);
//console.log('Runtime: ' + (end - start) + 'ms');