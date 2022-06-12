var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var obj = new Arithmetic(10, 11);
var obj2 = new Arithmetic(51, 21);
var Ret = 0;
Ret = obj.Addition();
console.log("Addition is : " + Ret);
Ret = obj.Substraction();
console.log("Substraction is : " + Ret);
Ret = obj.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = obj.Division();
console.log("Division is : " + Ret);
console.log();
Ret = obj2.Addition();
console.log("Addition is : " + Ret);
Ret = obj2.Substraction();
console.log("Substraction is : " + Ret);
Ret = obj2.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = obj2.Division();
console.log("Division is : " + Ret);
