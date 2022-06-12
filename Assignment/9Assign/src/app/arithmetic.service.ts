import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{
  public iAns:any;
  constructor() { }

  public add(iNo1:any,iNo2:any)
  {
    this.iAns = iNo1 + iNo2;
    return (this.iAns);
  }
  public sub(iNo1:any,iNo2:any)
  {
    this.iAns = iNo1 - iNo2;
    return (this.iAns);
  }
}
