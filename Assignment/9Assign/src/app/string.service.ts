import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  public iCount:number;

  constructor() 
  { 
    this.iCount = 0; 
  }

  public chkCapital(sStr:any):number
  {
    var iCnt:number = 0;
    for(iCnt=0;iCnt <= sStr.length;iCnt++)
    {
      if(sStr[iCnt] >= 'A' && sStr[iCnt] <= 'Z' )
      {
        this.iCount++;
      }
    }
    return this.iCount;
  }
}
