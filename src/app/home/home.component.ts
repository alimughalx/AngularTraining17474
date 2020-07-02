import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Gender = ['Male', 'Female'];
  model = new User(0, '', '','');

  isDisabled = false;
  empIdPlaceHolder= "Enter Employee ID";
  firstNamePlaceHolder= "Enter First Name";
  lastNamePlaceHolder= "Enter Last Name";
  btnTitle = "Submit";
  
  ngOnInit(): void {
    this.model = new User(17474, 'Ali', 'Raza', this.Gender[0]);
  }
  ngAfterViewInit():void{
    console.log("After View Initialized");
  }

  reset() {
    this.model = new User(0, '', '','');
  }

  submitInfo() {
    let myUser =  new User(17474, 'Ali',
                           'Raza Zafar',
                           'Male');
    console.log('My User is called ' + myUser.firstName);
    this.model = myUser;
    this.reset();
  }
}
