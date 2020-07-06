import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [
    {"Key":991,"FName":"Ali", "LName":"Zafar", "Age":29, "Department":"SharePoint"},
    {"Key":992,"FName":"Usman", "LName":"Zafar", "Age":35, "Department":"Architect"},
    {"Key":993,"FName":"Nouman", "LName":"Zafar", "Age":33, "Department":"HR"},
    {"Key":994,"FName":"Ahsan", "LName":"Javed", "Age":27, "Department":"SharePoint"},
    {"Key":995,"FName":"Hassan", "LName":"Nawaz", "Age":24, "Department":"SharePoint"},
    {"Key":996,"FName":"Ali", "LName":"Saeed", "Age":26, "Department":"Mobile"}
  ]
  SKey: number = 0;
  FirstName: string ="";
  LastName: string ="";
  Age: number = 0;
  Department: string ="";
  show: boolean = false;
  ngOnInit(): void {
  }

  selectStudent(e: any):void{
    this.SKey =  Number(e);
    if(this.SKey && this.SKey>0){
      let student = this.students.find(i => i.Key === this.SKey);
      if(student){
        this.show = true;
        this.FirstName = student.FName;
        this.LastName = student.LName;
        this.Department = student.Department;
        this.Age = student.Age;
      }  
    }else{
      this.show = false;
      this.FirstName = "";
      this.LastName = "";
      this.Department = "";
      this.Age = 0;
    }
    
  }
}
