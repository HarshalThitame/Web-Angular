var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var iRet = 0;
iRet = Max(Arr);
console.log("Second Maximum number is : " + iRet);
function Max(Brr) {
    var iCnt = 0;
    var iMax = 0;
    var iMax2 = 0;
    for (iCnt = 0; iCnt < Brr.length; iCnt++) {
        if (iMax < Brr[iCnt]) {
            iMax2 = iMax;
            iMax = Brr[iCnt];
        }
        else if (Brr[iCnt] > iMax2 && Brr[iCnt] != iMax) {
            iMax2 = Brr[iCnt];
        }
    }
    return iMax2;
}
