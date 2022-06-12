import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  template:`
   <div style="border: solid; padding-left : 10px; Margin-top:10px">
  <h1 >Inside Child</h1>
  <h2>{{iNo}} {{str1}}</h2>

  <h2>Total number of Capital character in string "{{str}}" is : {{result2}}</h2>
    </div>
  ` 
})
export class ChildComponent implements OnInit 
{
  public result:any;
  public iNo:number = 50;
  public str1:any;

  public str = "Marvellous Infosystems";
  public result2:any;
  
  constructor(private _obj:NumberService,private _obj2:StringService) { }

  ngOnInit(): void 
  {
    this.result = this._obj.chkPrime(this.iNo);
    if(this.result == true)
    {
      this.str1 = "Number is Prime"
    }
    else
    {
      this.str1 = "Number is not Prime"
    }
    this.result2 = this._obj2.chkCapital(this.str);

  }

}
