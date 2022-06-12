import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `
    <div style="border: solid; padding-left : 10px; margin-top:10px;">
  <h1>Inside Child 2 </h1>
  <h2>Total number of Capital character in string "{{str}}" is : {{result}}</h2>
    </div>
  `
})
export class Child2Component implements OnInit 
{

  public str = "Marvellous";
  public result:any;
  constructor(private _obj:StringService) { }

  ngOnInit(): void 
  {
    this.result = this._obj.chkCapital(this.str);
  }

}
