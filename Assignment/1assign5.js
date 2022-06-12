function Fibonacci(value1) {
    var iCnt = 0;
    var ans = 0;
    var no1 = 0;
    var no2 = 1;
    for (iCnt = 1; iCnt < value1; iCnt++) {
        ans = no1 + no2;
        if (value1 < ans) {
            break;
        }
        console.log(ans);
        no1 = no2;
        no2 = ans;
    }
}
var no = 21;
var bRet;
Fibonacci(no);
