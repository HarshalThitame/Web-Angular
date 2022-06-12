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

var obj = new Circle(5);
var obj2 = new Circle(7);

var Ret : number = 0;
 
Ret = obj.Area();
console.log("Area of circle is : "+Ret);

console.log()

Ret = obj2.Area();
console.log("Area of circle is : "+Ret);
