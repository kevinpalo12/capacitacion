import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

num1: number;
num2: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 5; 
   }

  ngOnInit(): void {
  }

}
