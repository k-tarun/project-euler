var solution = function (input) {
    var i = 1;
    var j = 2;
    var c = 0;
    var sum = 2;
    while (j < input) {
        if(c == 3)
        {
            sum += j;
            c = 0;
        }
        var temp = i;
        i = j;
        j += temp;
        ++c;
    }
    return sum;
} 
  

var input = 4000000;
//var start = performance.now();
var ans = solution(input);
//var end = performance.now();
console.log('Answer: ' + ans);
//console.log('Runtime: ' + (end - start) + 'ms');