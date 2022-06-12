function Factor(value1) {
    var iCnt = 0;
    for (iCnt = 1; iCnt < value1; iCnt++) {
        if (value1 % iCnt == 0) {
            console.log(iCnt);
        }
    }
}
var fact = 20;
Factor(fact);
