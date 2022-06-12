var Circle = /** @class */ (function () {
    function Circle(a, b) {
        if (b === void 0) { b = 3.14; }
        this.radius = a;
        this.PI = b;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.PI * this.radius * this.radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(5);
var obj2 = new Circle(7);
var Ret = 0;
Ret = obj.Area();
console.log("Area of circle is : " + Ret);
console.log();
Ret = obj2.Area();
console.log("Area of circle is : " + Ret);
