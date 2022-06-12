
function chkArmstrong(str1):boolean
{
    console.log(str1);
    console.log(str1.includes("Marvellous"))
    {
        return true;
    }
   
}

var str = "Pune Kothrud Marvellous Infosystem";
var iRet : boolean ;
chkArmstrong(str);
if(iRet == true)
{
   console.log("String contains Marvellous in it");
}
else if(iRet == false)
{
   console.log("String does not contains Marvellous in it");
}
