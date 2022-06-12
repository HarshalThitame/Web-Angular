import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public bret = true;
  public chkPrime(no:any):boolean
  {
   var iCnt:number = 0;
   for(iCnt =2;iCnt<=(no/2);iCnt++)
   {
    if(no%2==0)
    {
      this.bret = false;
    }
   } 
   return this.bret;
  }
}
