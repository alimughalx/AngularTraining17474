import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manualHome',
  template:`<div class="content" style="margin-top:80px; text-align: center">
    <h2>Manual Home Component</h2>
    First Name<input type="text" [placeholder]="namePlaceHolder" [value]="firstName">
  </div>`
})
export class manualHomeComponent implements OnInit {
    namePlaceHolder= "Enter your name";
    firstName="";
    ngOnInit(): void {
        this.firstName = "AliRaza"
    }
}