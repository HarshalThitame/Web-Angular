import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  template: `
    <div style="border: solid; padding-left : 10px;margin-top : 10px">
    <h1>Inside Demo</h1>
    <h2>Addition of {{iNo1}} & {{iNo2}} is {{Sum}}</h2>
    <h2>Substraction of {{iNo1}} & {{iNo2}} is {{Sub}}</h2>
    </div>
  `
})
export class DemoComponent implements OnInit {

  public iNo1:number = 10;
  public iNo2:number = 11;
  public Sum: any;
  public Sub: any;

  constructor(private _obj:ArithmeticService) { }

  ngOnInit(): void 
  {
    this.Sum = this._obj.add(this.iNo1,this.iNo2);
    this.Sub = this._obj.sub(this.iNo1,this.iNo2);
  }
}
