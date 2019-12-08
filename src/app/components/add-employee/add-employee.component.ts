import { Component, OnInit } from '@angular/core';

import { Employee } from '../../Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: 0,
    salary: 0
  };

  disableSalary: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addEmployeeSubmit({ value, valid }: { value: Employee, valid: boolean }) {
    if (!valid) {
      console.log("not correct data");
    } else {
      console.log(this.employee);
    }
  }

}
