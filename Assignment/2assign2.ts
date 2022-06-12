var Arr:number[] = [23,6,7,4,5,7]
var iRet : number = 0;
iRet = Addition(Arr);
console.log("Addition is : "+iRet);

function Addition(Brr:number[])
{
var iCnt : number = 0;
var iSum : number = 0;
for(iCnt = 0;iCnt < Brr.length;iCnt++)
{
iSum = iSum + Brr[iCnt];
}
return iSum;
}

