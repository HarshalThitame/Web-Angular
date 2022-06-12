var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj = new CircleX(5);
var obj2 = new CircleX(7);
var Ret = 0;
Ret = obj.Area();
console.log("Area of circle is : " + Ret);
console.log();
Ret = obj2.Area();
console.log("Area of circle is : " + Ret);
console.log();
console.log();
Ret = obj.circumference();
console.log("Circumference of circle is : " + Ret);
console.log();
Ret = obj2.circumference();
console.log("Circumference of circle is : " + Ret);
