//Regular Function
var Ret = 0;
function Addition1(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
Ret = Addition1(10, 11);
console.log("Addition is : " + Ret);
//Anonymous Function (Function without name)
var Addition2 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition2(20, 11);
console.log("Addition is : " + Ret);
//Fat Arrow / Lambda / Arrow function
var Addition3 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition3(20, 11);
console.log("Addition is : " + Ret);
