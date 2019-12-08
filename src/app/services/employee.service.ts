import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: AngularFireList<any>;
  Employee: AngularFireObject<any>;

  constructor(private angularfire: AngularFireDatabase) {
    this.employees = this.angularfire.list('/employees/employees') as AngularFireList<Employee[]>;
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee:Employee) {
    return this.employees.push(employee);
  }

}
