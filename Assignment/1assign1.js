function Maximum(value1, value2, value3) {
    if (value1 < value2 && value2 > value3) {
        console.log("Maximum is :" + value2);
    }
    else if (value2 < value1 && value1 > value2) {
        console.log("Maximum is :" + value1);
    }
    else if (value1 < value3 && value3 > value2) {
        console.log("Maximum is :" + value3);
    }
}
var no1 = 23;
var no2 = 89;
var no3 = 6;
Maximum(no1, no2, no3);
