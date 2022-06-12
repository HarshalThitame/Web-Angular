import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  template: `
  <div style="border: solid; padding-left : 10px;Margin-top:10px">
  <h1 >Inside Child 1</h1>
  <h2>{{iNo}} {{str1}}</h2>
  </div>
  
  `
})
export class Child1Component implements OnInit {

  public result:any;
  public iNo:number = 50;
  public str1:any;

 
  
  constructor(private _obj1:NumberService) { }

  ngOnInit(): void 
  {
    this.result = this._obj1.chkPrime(this.iNo);
    if(this.result == true)
    {
      this.str1 = "Number is Prime"
    }
    else
    {
      this.str1 = "Number is not Prime"
    }
  }
}
