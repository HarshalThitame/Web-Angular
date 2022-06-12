class Arithmetic
{
    No1:number;
    No2:number;

    constructor(a:number,b:number)
    {
        this.No1 = a;
        this.No2 = b;    
    }
    Addition():number
    {
        var Ans:number = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    }
    Substraction():number
    {
        var Ans:number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }
    Multiplication():number
    {
        var Ans:number = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    }
    Division():number
    {
        var Ans:number = 0;
        Ans = this.No1 / this.No2;
        return Ans;
    }
}

var obj = new Arithmetic(10,11);
var obj2 = new Arithmetic(51,21);

var Ret : number = 0;
 
Ret = obj.Addition();
console.log("Addition is : "+Ret);

Ret = obj.Substraction();
console.log("Substraction is : "+Ret);

Ret = obj.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = obj.Division();
console.log("Division is : "+Ret);

console.log()

Ret = obj2.Addition();
console.log("Addition is : "+Ret);

Ret = obj2.Substraction();
console.log("Substraction is : "+Ret);

Ret = obj2.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = obj2.Division();
console.log("Division is : "+Ret);
