class Circle
{
    radius:number;
    PI:number;

    constructor(a:number,b:number = 3.14)
    {
        this.radius = a;
        this.PI = b;    
    }
    Area():number
    {
        var Ans:number = 0;
        Ans = this.PI * this.radius * this.radius;
        return Ans;
    }
}

class CircleX extends Circle
{
    circumference():number
    {
        var Ans:number = 0;
        Ans = 2 * this.PI * this.radius
        return Ans;
    }
}

var obj = new CircleX(5);
var obj2 = new CircleX(7);

var Ret : number = 0;
 
Ret = obj.Area();
console.log("Area of circle is : "+Ret);

console.log()

Ret = obj2.Area();
console.log("Area of circle is : "+Ret);

console.log()
console.log() 

Ret = obj.circumference();
console.log("Circumference of circle is : "+Ret);

console.log()

Ret = obj2.circumference();
console.log("Circumference of circle is : "+Ret);
