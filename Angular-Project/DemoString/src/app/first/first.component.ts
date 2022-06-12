import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent 
{
  //Characteristics
  public name : string = " Harshal Shivaji Thitame";

  //Behaviour
  Display():string
  {
    var Ret:string = "Hello" + this.name;
    return Ret;
  }

  Addition(no1:number,no2:number)
  {
    return no1 + no2; 
  }
}
