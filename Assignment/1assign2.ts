function Area(value1:number):number
{
   var Ans:number = 3.14 * value1 * value1;
   return Ans;
}
var radius : number = 5;
var iRet:number = 0;
iRet = Area(radius);
console.log("Area of Circle : "+iRet);