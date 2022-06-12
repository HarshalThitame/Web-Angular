var Arr:number[] = [23,89,6,29,56,45,77,32]
var iRet : number = 0;
iRet = Max(Arr);
console.log("Maximum number is : "+iRet);

function Max(Brr:number[])
{
   var iCnt : number = 0;
   var iMax : number = 0;
   for(iCnt = 0;iCnt < Brr.length;iCnt++)
   {
      if(iMax  < Brr[iCnt])
      {
         iMax = Brr[iCnt];
      }
   }
   return iMax;
}