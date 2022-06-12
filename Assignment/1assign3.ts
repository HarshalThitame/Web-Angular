function Factor(value1:number):void
{
   var iCnt:number = 0;
   for(iCnt  = 1;iCnt < value1;iCnt++)
   {
      if(value1 % iCnt == 0)
      {
         console.log(iCnt);
      }
   }
}
var fact : number = 20;
Factor(fact);
