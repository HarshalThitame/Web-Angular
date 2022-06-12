function Prime(value1:number):boolean
{
   var iCnt:number = 0;
   for(iCnt  = 2;iCnt < value1;iCnt++)
   {
      if(value1 % iCnt != 0)
      {
         return true
      }
      else
      {
         return false
      }
   }
}
var no : number = 11;
var bRet : boolean;
bRet = Prime(no);
if(bRet == true)
{
   console.log("Number is Prime")
}
else
{
   console.log("Number is not Prime")
}