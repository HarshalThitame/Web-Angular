function Fibonacci(value1:number):void
{
   var iCnt:number = 0;
   var ans:number = 0;
   var no1 : number = 0;
   var no2:number = 1;
   for(iCnt  = 1;iCnt < value1;iCnt++)
   {
      
      ans = no1 + no2;
      if(value1 < ans)
      {
         break;
      }
      console.log(ans);
      no1 = no2;
      no2 = ans;
      
   }
}
var no : number = 21;
var bRet : boolean;
Fibonacci(no);
