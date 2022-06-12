var Arr = [23, 6, 7, 4, 5, 7];
var iRet = 0;
iRet = Addition(Arr);
console.log("Addition is : " + iRet);
function Addition(Brr) {
    var iCnt = 0;
    var iSum = 0;
    for (iCnt = 0; iCnt < Brr.length; iCnt++) {
        iSum = iSum + Brr[iCnt];
    }
    return iSum;
}
