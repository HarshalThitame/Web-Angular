function chkArmstrong(iNo) {
    var iTemp = 0;
    var iDigCnt = 0;
    var iDigit = 0;
    var iSum = 0;
    var iCnt = 0;
    var iMult = 1;
    iTemp = iNo;
    while (iNo != 0) {
        iDigCnt++;
        iNo = iNo / 10;
    }
    iNo = iTemp;
    while (iNo != 0) {
        iMult = 1;
        iDigit = iNo % 10;
        for (iCnt = 1; iCnt <= iDigCnt; iCnt++) {
            iMult = iMult * iDigit;
        }
        iSum = iSum + iMult;
        iNo = iNo / 10;
    }
    console.log("isum" + iSum);
    console.log("isum" + iTemp);
    if (iSum == iTemp) {
        return true;
    }
    else {
        return false;
    }
}
var value = 153;
var iRet;
chkArmstrong(value);
if (iRet == true) {
    console.log("Number is Armstrong");
}
else if (iRet == false) {
    console.log("Number is not Armstrong");
}
