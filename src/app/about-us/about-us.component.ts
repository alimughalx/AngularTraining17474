import { Component, OnInit } from '@angular/core';
import {student} from './../models/student.model';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
        FirstName: [
          "",
          Validators.compose([Validators.required, Validators.minLength(2)])
        ],
        LastName: [
          "",
          Validators.compose([Validators.required, Validators.minLength(2)])
        ],
        Age: [
          18,
          Validators.compose([Validators.required, Validators.min(18), Validators.max(40)])
        ],
        Department: [
          null
        ],
        IsActive: [
          true
        ]
    });
  }
  students: student[];
  student:  student;
  ngOnInit(): void {
    this.student = new student();
    this.students = [];
  }
  Save(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.student.FirstName = this.form.controls.FirstName ? this.form.controls.FirstName.value.toString():"";
      this.student.LastName = this.form.controls.LastName ? this.form.controls.LastName.value.toString():"";
      this.student.Department = this.form.controls.Department ? this.form.controls.Department.value?.toString():"";
      this.student.Age = this.form.controls.Age ? Number(this.form.controls.Age?.value):0;
      this.student.IsActive = this.form.controls.IsActive ? Boolean(this.form.controls.IsActive.value):true;
      this.student.Key = this.students?.length + 1 ;
  
      this.students.push(this.student);
      this.student =  new student(); 
      this.form.reset();
    }  
  }
}
