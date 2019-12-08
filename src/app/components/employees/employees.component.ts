import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[];
  totalEmployees: number;
  totalSalaryEmployees: number;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().valueChanges().subscribe(employees=>{
      this.employees = employees;
      //console.log(this.employees);
      this.getTotalEmployees();
    });
  }

  getTotalEmployees(){
    let total = 0;
    let totalSalary = 0;
    for (let index = 0; index < this.employees.length; index++) {
      total++;
      totalSalary += parseFloat(this.employees[index].salary.toString());
    }
    this.totalEmployees = total;
    this.totalSalaryEmployees = totalSalary;
    console.log(this.totalEmployees);
    console.log(this.totalSalaryEmployees);
  }

}
