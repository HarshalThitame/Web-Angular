var Arr:number[] = [23,89,6,29,56,45,77,32]
var iRet : number = 0;
iRet = Max(Arr);
console.log("Second Maximum number is : "+iRet);

function Max(Brr:number[])
{
   var iCnt : number = 0;
   var iMax : number = 0;
   var iMax2 : number = 0;
   for(iCnt = 0;iCnt < Brr.length;iCnt++)
   {
      if(iMax  < Brr[iCnt])
      {
         iMax2 = iMax;
         iMax = Brr[iCnt];
      }
      else if(Brr[iCnt] > iMax2 && Brr[iCnt] != iMax)
      {
         iMax2 = Brr[iCnt];
      }
   }
   return iMax2;
}